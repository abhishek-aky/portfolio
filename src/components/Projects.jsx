import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/E-Commerce_WebApp.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> E-Commerce WebApp</h3>
          <p>
            Built a complete e-commerce platform with product browsing, cart management, user login, and order flow. Frontend developed using HTML, CSS, Bootstrap, and JavaScript, with a Node.js + Express backend and MongoDB for data storage. Stripe integration for payments is currently in progress.


          </p>
          <div className="project-tech">
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/Churn-Prediction.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Customer Churn Prediction</h3>
          <p>
            Developed a machine learning model to predict customer churn based on behavioral and demographic data. Performed data preprocessing, EDA, and trained models like Logistic Regression and Random Forest. Achieved high accuracy and recall to identify at-risk customers, helping businesses reduce churn and improve retention strategies.

          </p>
          <div className="project-tech">
            <span>Python</span>
            <span>Pandas</span>
            <span>Scikit-learn</span>
            <span>Matplotlib</span>
            <span>Seaborn</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/calc.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Apple Calculator Clone</h3>
          <p>
            Built a sleek, responsive clone of the Apple iOS calculator using HTML, CSS, and JavaScript. The UI replicates the original design, while JavaScript handles dynamic input, operations, and real-time display updates. Designed as a mini project to demonstrate UI precision and logic implementation in pure front-end technologies.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>BootStrap</span>
            <span>JavaScript</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};