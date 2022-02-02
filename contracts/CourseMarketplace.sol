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

    /// Only owner has an access!
    error OnlyOwner();

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

    // if course owner is same as msg.sender then it means sender already owns the course so it cannot be repurchased - reverts TX to error.
    function hasCourseOwnership(bytes32 courseHash) private view returns(bool) {
        return ownedCourses[courseHash].owner == msg.sender;
    }
}
