import React from "react";
import conf from "../../conf/conf";
import { useSelector } from "react-redux";

function BatchInfo() {
  const batch = useSelector((state) => state.userInfo.batch);
  const fileId = batch.imagePath;
    let imageUrl = "https://cloud.appwrite.io/v1/storage/buckets/"+conf.bucketId
    +"/files/"+fileId+"/view?project="+conf.projectId;
  return (
    <div className="flex justify-center items-center lg:h-[650px] py-4">
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
          <p><b>Batch Name: </b><i>{batch.name}</i></p>
          <p><b>Course: </b><i>{batch.course}</i></p>
          <p><b>Create At: </b><i>{batch.$createdAt}</i></p><br></br>
          <p className="text-lg">
            <b>Description: </b>{batch.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar suscipit risus, nec consectetur orci
            pellentesque sit amet. Morbi vehicula dui ut velit laoreet dignissim. Sed at libero nec tortor
            vestibulum consectetur. Vivamus hendrerit eros vitae urna luctus bibendum. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Fusce hendrerit magna a nibh aliquam, ac
            condimentum magna bibendum. Aenean ut arcu eget ligula dapibus viverra
          </p>
        </div>
      </div>
    </div>
  );
}

export default BatchInfo;
