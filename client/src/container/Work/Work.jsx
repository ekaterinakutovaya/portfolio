import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { useTranslation } from "react-i18next";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const { t } = useTranslation();

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then(data => {
      console.log(data);
      
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = item => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter(work => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        {t('my')} <span>{t('works')}</span>
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item" key={index}>
            <div className="app__work-content">
              <h4 className="bold-text">{work.titleRu}</h4>
              <p className="p-text" style={{ margin: "20px 0" }}>
                {work.descriptionRu}
              </p>
              <h6 className="bold-text" style={{ margin: "10px 0" }}>{t('stack')}:</h6>
              <p>{work.stack}</p>

              <a target="_blank" type="button" className="button" href={work.projectLink} style={{marginRight: '20px'}}>LIVE DEMO</a>
              <a target="_blank" type="button" className="button" href={work.codeLink}>CODE</a>

            </div>

            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);


// skEFdJddIpjbX5tPE9mpBfSsm4cKm4UAfwV7PZt7P6hMOfCHKB4nvpI8sziHIGqZRnX7cxyWQJ7FXhQR1oTRQ1DcH5GhBKdhosyjbVN8sL8HpJKyl6fDsekcZ5CMV3IrqmWbzDvii57kC6RtALefbS2B2ELYxLtN5IXsUVasFFpLMwXedsqS

// REACT_APP_SANITY_TOKEN = skmygIXGL4TyWei6KBIqWV8dFI6xuI32jz4ZUW7ZUguOWYQe3ogCZUvH1YCToTUEwx95XksLAFmtsnSxBlejINtYtDzaU1RAqQyeqVrgMLfCpAzxtX1vpCtrVZxL3NzwwudAzfkxuomZDbBCh4WtKBdURLv9odq1QJU5GHHzFVoPADYW8XBM