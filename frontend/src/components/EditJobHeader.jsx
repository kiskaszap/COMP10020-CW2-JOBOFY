// src/components/JobHeader.js

function EditJobHeader() {
  return (
    <div className="rts__job__card__big bg-transparent p-0 position-relative z-1 flex-wrap justify-content-center d-flex gap-4 align-items-center">
      <div className="">
        <div className="job__meta w-100 d-flex text-center text-md-start flex-column gap-2">
          <h3 className="job__title text-center h3 mb-0">Edit your job</h3>
          <div className="d-flex gap-4 justify-content-center justify-content-md-start flex-wrap mb-3 mt-2"></div>
        </div>
      </div>
    </div>
  );
}

export default EditJobHeader;
