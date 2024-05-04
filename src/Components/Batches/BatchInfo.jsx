import React, { useCallback, useEffect, useState } from "react";
import conf from "../../conf/conf";
import { useDispatch, useSelector } from "react-redux";
import database from "../appwrite/database";
import StudentCard from "./StudentCard";
import { setBatchStudents } from "../Store/Reducers/Reducer";

function BatchInfo() {
  const batch = useSelector((state) => state.userInfo.batch);
  const fileId = batch.imagePath;
  const batchId = batch.$id;
  let imageUrl =
    "https://cloud.appwrite.io/v1/storage/buckets/" +
    conf.bucketId +
    "/files/" +
    fileId +
    "/view?project=" +
    conf.projectId;
  const batchStudents = useSelector((state)=>state.userInfo.batchStudents);
  const [allStudent, setAllStudent] = useState(batchStudents);
  const dispatch = useDispatch();
  const getAllStudent = useCallback(() => {
    database
      .getAllBatchStudent(batchId)
      .then((response) => 
      {
        // setAllStudent(response.documents);
        // dispatch(setBatchStudents(response.documents));
      })
      .catch((error) => console.log(error));
  });
  useEffect(() => {
    getAllStudent();
  }, [getAllStudent]);

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="container mx-auto flex flex-col lg:flex-row md:justify-between justify-center items-center lg:p-10 overflow-hidden">
        <div className="w-1/2 mr-4 mt-14">
          <div className="max-h-full overflow-hidden">
            <img
              src={imageUrl}
              alt="Blog Image"
              className="w-full lg:h-[550px] object-cover object-left-top"
            />
          </div>
        </div>
        <div className="w-1/2 ml-4 mr-4">
          <h1 className="text-3xl font-bold mb-4">About the Event</h1>
          <p>
            <b>Batch Name: </b>
            <i>{batch.name}</i>
          </p>
          <p>
            <b>Course: </b>
            <i>{batch.course}</i>
          </p>
          <p>
            <b>Create At: </b>
            <i>{batch.$createdAt}</i>
          </p>
          <br></br>
          <p className="text-lg">
            <b>Description: </b>
            {batch.description} Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed pulvinar suscipit risus, nec consectetur orci
            pellentesque sit amet. Morbi vehicula dui ut velit laoreet
            dignissim. Sed at libero nec tortor vestibulum consectetur. Vivamus
            hendrerit eros vitae urna luctus bibendum. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Fusce hendrerit magna a nibh aliquam, ac condimentum magna bibendum.
            Aenean ut arcu eget ligula dapibus viverra
          </p>
        </div>
      </div>
      <div className="mt-4 flex gap-4 overflow-x-auto scrollbar-hide p-4">
      {
        allStudent && allStudent.map((student, index)=>
        <div key={student.$id}>
          <StudentCard student={student}/>
        </div>
        )
      }
      </div>
    </div>
  );
}

export default BatchInfo;
