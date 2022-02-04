// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
 
contract CourseMarketplace {
 
    enum State {
        Purchased,
        Activated,
        Deactivated
    }
 
    struct Course {
        uint id; //32  0x00000000000000000000000000003130
        uint price; //32  0x0000000000000000000000000000313000000000000000000000000000003130
        bytes32 proof; //special constructed value by user on frontend 32
        address owner; //20
        State state; // 1
    }
 
    mapping(bytes32 => Course) private ownedCourses; //mapping of courseHash to Course data
 
    mapping(uint => bytes32) private ownedCourseHash; // mapping of courseId to courseHash
 
    uint private totalOwnedCourses;
 
    address payable private owner;
 
    constructor(){
        setContractOwner(msg.sender);
    }
 
    /// Course has already been purchased!
    error CourseHasOwner();
 
    /// Sender is not course owner!
    error SenderIsNotCourseOwner();
 
    /// Only owner has an access!
    error OnlyOwner();

    /// Course has invalid state!
    error InvalidState();

    /// Course is not created!
    error CourseIsNotCreated();
 
    modifier onlyOwner() {
        if(msg.sender != getContractOwner()){
            revert OnlyOwner();
        }
        _;
    }
 
    //courseHash constructed first when purchaseCourse is called. totalOwnedCourses then is iniatiated starting at index 0. In ownedCourseHash mapping at the index 0 the first courseHash is assigned. In the mapping of ownedCourses, the courseHash is used to map there the courses data (id, price proof, ect). So when you access courseHash, course data is accessed.
    function purchaseCourse(bytes16 courseId, bytes32 proof) external payable {
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender)); // used in mapping
 
        // This error calls if owner tries to purchase same course multiple times
        if(hasCourseOwnership(courseHash)){
            revert CourseHasOwner();
        }
 
        uint id = totalOwnedCourses++;
 
        ownedCourseHash[id] = courseHash; // returns the courseHash for  specific index of the ownedCourseHash mapping.
 
        ownedCourses[courseHash] = Course({ //Creates a Course struct for each courseHash used inside of ownedCourses.
            id: id,
            price: msg.value,
            proof: proof,
            owner: msg.sender,
            state: State.Purchased
        });
    }

    function repurchaseCourse(bytes32 courseHash) external payable {
        if (!isCourseCreated(courseHash)){
            revert CourseIsNotCreated();
        }

        if (!hasCourseOwnership(courseHash)){
            revert SenderIsNotCourseOwner();
        }

        Course storage course = ownedCourses[courseHash];

        if (course.state != State.Deactivated){
            revert InvalidState();
        }

        course.state = State.Purchased;
        //this reassigns the value
        course.price = msg.value;

    }

    function activateCourse(bytes32 courseHash) external onlyOwner {
        if (!isCourseCreated(courseHash)){
            revert CourseIsNotCreated();
        }
        //storage updates the changes, memory does not. If we make it here, it means we do have a course and we are getting from storage.
        Course storage course = ownedCourses[courseHash];

        //Course has to be in purchased state to be able to get activated so if not in purchased state then revert.
        if(course.state != State.Purchased){
            revert InvalidState();
        }
        //if all else goes well, the course state is finally chnged to activated
        course.state = State.Activated;
    }

    function deactivateCourse(bytes32 courseHash) external onlyOwner {
        if (!isCourseCreated(courseHash)){
            revert CourseIsNotCreated();
        }

        Course storage course = ownedCourses[courseHash];


        if(course.state != State.Purchased){
            revert InvalidState();
        }

        //Transfers ether back to owner
        (bool success, ) = course.owner.call{value: course.price}("");
        require(success, "Transfer failed!");

        course.state = State.Deactivated;
        course.price = 0;
    }
 
    function transferOwnership(address newOwner) external onlyOwner {
        setContractOwner(newOwner);
    }
 
    function getCourseCount() external view returns(uint){
        return totalOwnedCourses;
    }
 
    // accepts index as param to retreive Course struct
    function getCourseHashAtIndex(uint index) external view returns(bytes32){
        return ownedCourseHash[index];
    }
 
    // accepts courseHash as param to retrieve Course struct
    function getCourseByHash(bytes32 courseHash) external view returns(Course memory){
        return ownedCourses[courseHash];
    }
 
    function getContractOwner() public view returns(address) {
        return owner;
    }
 
    function setContractOwner(address newOwner) private {
        owner = payable(newOwner);       
    }

    // this is a helper function for activateCourse function
    function isCourseCreated(bytes32 courseHash) private view returns (bool) {
        //If owner is not equal to 0 address then returns true which means course IS created
        return ownedCourses[courseHash].owner != 0x0000000000000000000000000000000000000000;
    }
 
    // if course owner is same as msg.sender then it means sender already owns the course so it cannot be repurchased - reverts TX to error.
    function hasCourseOwnership(bytes32 courseHash) private view returns(bool) {
        return ownedCourses[courseHash].owner == msg.sender;
    }
}
