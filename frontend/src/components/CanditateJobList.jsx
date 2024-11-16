import JobCard from "./JobCard";
function CanditateJobList() {
  return (
    <div className="dashboard__right">
      <div className="dash__content">
        <div className="applied__job__info radius-16">
          <div className="applied__job__list">
            <JobCard
              title={"Software engineer"}
              company={"Lamborghini"}
              location={"Bologna, Italy"}
              salaryMin={"75000"}
              salaryMax={"105000"}
              logo={"/uploads/lamborghini.png"}
            />
            <JobCard
              title={"UI/UX designer "}
              company={"Tesla"}
              location={"Austin, Texas"}
              salaryMin={"95000"}
              salaryMax={"135000"}
              logo={"/uploads/tesla.png"}
            />
            <JobCard
              title={"Android developer"}
              company={"Google"}
              location={"London, UK"}
              salaryMin={"70000"}
              salaryMax={"115000"}
              logo={"/uploads/android.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanditateJobList;
