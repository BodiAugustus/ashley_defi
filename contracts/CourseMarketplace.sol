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

    //courseHash constructed first when purchaseCourse is called. totalOwnedCourses then is iniatiated starting at 0. In ownedCourseHash mapping at the index 0 the first courseHash is assigned. In the mapping of ownedCourses, the courseHash is used to map there the courses data (id, price proof, ect). So when you access courseHash, course data is accessed.
    function purchaseCourse(bytes16 courseId, bytes32 proof) external payable returns(bytes32){
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));
        uint id = totalOwnedCourses++;
        ownedCourseHash[id] = courseHash; 
        ownedCourses[courseHash] = Course({
            id: id,
            price: msg.value,
            proof: proof,
            owner: msg.sender,
            state: State.Purchased
        });
    }
}
