import React from "react";
import { motion } from "framer-motion";
import BarChart from "./components/bar-chart";
import PieChart from "./components/pie-chart";
import MainCard from "./components/main-card";
import SmallCard from "./components/small-card";
import ChartComponent from "./components/chart";

const gridContainerVarient = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const gridSquareVarients = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Dashboard = () => {
  return (
    <>
      {/* +++++++++++++++++++++++++++ M Content Below ++++++++++++++++++++++++++ */}

      <div className="space-y-4 items-center mx-auto">
        <div className="flex justify-between m-auto flex-wrap gap-y-4">
          <div>
            <h5 className="font-bold text-theme-btnBgText text-xl">
              DASHBOARD
            </h5>
            <p className="text-sm font-semibold text-theme-tertiary">
              Global view
            </p>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="bg-theme-btnBg hover:bg-theme-btnColorHover p-3  rounded-md text-theme-btnColor text-sm font-semibold shadow-lg z-30"
            >
              More Details
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-200 text-theme-tertiary p-3 rounded-md text-sm font-semibold shadow-md hover:bg-slate-300 z-30"
            >
              View Details
            </motion.button>
          </div>
        </div>

        <div className="flex flex-col overflow-x-hidden">
          <motion.section
            variants={gridContainerVarient}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 mt-4 gap-4"
          >
            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg aspect-auto rounded-lg shadow-lg justify-center flex items-center col-span-1 sm:col-span-2 p-4"
            >
              <MainCard />
            </motion.div>

            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg aspect-auto rounded-lg shadow-lg justify-center flex items-center p-4"
            >
              <SmallCard />
            </motion.div>

            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg aspect-auto rounded-lg shadow-lg justify-center flex items-center p-4"
            >
              <SmallCard
                ImgUrl={
                  "https://th.bing.com/th/id/OIP.pOh4X4d_pa5dQ3HT4dlQsAHaET?rs=1&pid=ImgDetMain"
                }
              />
            </motion.div>

            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg aspect-auto rounded-lg shadow-lg justify-center flex items-center col-span-1 sm:col-span-2 p-4 "
            >
              <ChartComponent />
            </motion.div>

            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg aspect-auto rounded-lg shadow-lg justify-center flex items-center p-4"
            >
              <BarChart />
            </motion.div>

            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg aspect-auto rounded-lg shadow-lg justify-center flex items-center p-4"
            >
              <PieChart />
            </motion.div>

            {/* </div>
      </div> */}

            {/* ++++++++++++++++++++++++   Animations Below +++++++++++++++++++++++++++ */}

            {/* <div className="flex flex-col gap-10 overflow-x-hidden"> */}
            {/* <motion.section
          variants={gridContainerVarient}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 mt-4 gap-4"
        > */}
            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg p-6 aspect-square rounded-lg shadow-lg justify-center flex items-center gap-4"
            >
              <p className="text-2xl font-semibold text-theme-btnBgText">
                Coming Soon...
              </p>
            </motion.div>

            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg p-6 aspect-square rounded-lg shadow-lg justify-center flex items-center gap-4"
            >
              <p className="text-2xl font-semibold text-theme-btnBgText">
                Coming Soon...
              </p>
            </motion.div>

            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg p-6 aspect-square rounded-lg shadow-lg justify-center flex items-center gap-4"
            >
              <p className="text-2xl font-semibold text-theme-btnBgText">
                Coming Soon...
              </p>
            </motion.div>

            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg p-6 aspect-square rounded-lg shadow-lg justify-center flex items-center gap-4"
            >
              <p className="text-2xl font-semibold text-theme-btnBgText">
                Coming Soon...
              </p>
            </motion.div>

            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg p-6 aspect-square rounded-lg shadow-lg justify-center flex items-center gap-4"
            >
              <p className="text-2xl font-semibold text-theme-btnBgText">
                Coming Soon...
              </p>
            </motion.div>

            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg p-6 aspect-square rounded-lg shadow-lg justify-center flex items-center gap-4"
            >
              <p className="text-2xl font-semibold text-theme-btnBgText">
                Coming Soon...
              </p>
            </motion.div>

            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg p-6 aspect-square rounded-lg shadow-lg justify-center flex items-center gap-4"
            >
              <p className="text-2xl font-semibold text-theme-btnBgText">
                Coming Soon...
              </p>
            </motion.div>

            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg p-6 aspect-square rounded-lg shadow-lg justify-center flex items-center gap-4"
            >
              <p className="text-2xl font-semibold text-theme-btnBgText">
                Coming Soon...
              </p>
            </motion.div>

            <motion.div
              variants={gridSquareVarients}
              className="bg-theme-primaryBg p-6 aspect-square rounded-lg shadow-lg justify-center flex items-center gap-4"
            >
              <p className="text-2xl font-semibold text-theme-btnBgText">
                Coming Soon...
              </p>
            </motion.div>

            <motion.div
              className="w-1/4 h-1/4 bg-theme-btnBg cursor-grab rounded-lg shadow-lg"
              drag
              dragConstraints={{ left: 100, right: 100, top: 100, bottom: 100 }}
            >
              <p className="font-semibold text-md flex items-center justify-center h-full text-theme-primary text-center">
                Hello There, Welcome
              </p>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
