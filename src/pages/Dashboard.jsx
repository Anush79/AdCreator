import { useEffect, useState } from "react";
import { DoughnutChart } from "../components/DoughnutChart";
import { adInsights, usersData } from "../utils/constants";
import { calculateTotal } from "../utils/utilityFunctions";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TableChartIcon from "@mui/icons-material/TableChart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import UpDownArrow from "../components/UpDownArrow";
export default function Dashboard() {
  const [toggleChart, setToggleCharts] = useState("doughnut");
  const [matrix, setMatrix] = useState("clicks")
  const styleToggle = {
    background: "#0096ff",
    padding: "10px 9px 5px 9px",
    borderRadius: "25px",
    color: "#fff",
  };

  return (
    <div className="dashboard">
      <div className="dataContainer">
        <div className="tableName">
          {" "}
          Ad Insights
          <span>
            <HelpOutlineIcon />
          </span>{" "}
        </div>
        <table>
          <thead>
            <tr>
              <th className="right_align">
                Campaigns <UpDownArrow />
              </th>
              <th>
                Clicks <UpDownArrow />
              </th>
              <th>
                Cost <UpDownArrow />
              </th>
              <th>
                Conversions <UpDownArrow />
              </th>
              <th>
                Revenue <UpDownArrow />
              </th>
            </tr>
          </thead>
          <tbody>
            {adInsights?.map((item) => (
              <tr key={item.id}>
                <td className="right_align">{item?.campaigns}</td>
                <td>{item?.clicks.toLocaleString("en-IN")}</td>
                <td>USD {item?.cost.toLocaleString("en-IN")}</td>
                <td>{item?.conversions.toLocaleString("en-IN")}</td>
                <td>{item?.revenue.toLocaleString("en-IN")}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="right_align">Total</td>
              <td>
                {calculateTotal(adInsights, "clicks").toLocaleString("en-IN")}
              </td>
              <td>
                USD {calculateTotal(adInsights, "cost").toLocaleString("en-IN")}
              </td>
              <td>
                {calculateTotal(adInsights, "conversions").toLocaleString(
                  "en-IN"
                )}
              </td>
              <td>
                {calculateTotal(adInsights, "revenue").toLocaleString("en-IN")}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="dataContainer">
        <div className="tableName">
          {" "}
          Ad Insights
          {toggleChart === "doughnut" && <span>
            <select name="set matrix" id="" onChange={(e) => { setMatrix(e.target.value) }}>
              <option value="clicks">Clicks</option>
              <option value="cost">Cost</option>
              <option value="conversions">Conversions</option>
              <option value="revenue">Revenue</option>
            </select>
          </span>}
          <span>
            <HelpOutlineIcon />
          </span>{" "}
        </div>
        {toggleChart === "doughnut" ? (

          <DoughnutChart matrix={matrix} />
        ) : (
          <table>
            <thead>
              <tr>
                <th className="right_align">
                  Group <UpDownArrow />
                </th>
                <th>
                  Clicks <UpDownArrow />
                </th>
                <th>
                  Cost <UpDownArrow />
                </th>
                <th>
                  Conversions <UpDownArrow />
                </th>
                <th>
                  Revenue <UpDownArrow />
                </th>
              </tr>
            </thead>
            <tbody>
              {usersData?.map((item) => (
                <tr>
                  <td className="right_align">{item?.group}</td>
                  <td>{item?.clicks.toLocaleString("en-IN")}</td>
                  <td>USD {item?.cost.toLocaleString("en-IN")}</td>
                  <td>{item?.conversions.toLocaleString("en-IN")}</td>
                  <td>{item?.revenue.toLocaleString("en-IN")}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="right_align">Total</td>
                <td>
                  {calculateTotal(usersData, "clicks").toLocaleString("en-IN")}
                </td>
                <td>
                  USD{" "}
                  {calculateTotal(usersData, "cost").toLocaleString("en-IN")}
                </td>
                <td>
                  {calculateTotal(usersData, "conversions").toLocaleString(
                    "en-IN"
                  )}
                </td>
                <td>
                  {calculateTotal(usersData, "revenue").toLocaleString("en-IN")}
                </td>
              </tr>
            </tfoot>
          </table>
        )}
        <div className="toggleDataChart">
          <span
            className="doughnutIcon"
            style={toggleChart === "doughnut" ? styleToggle : null}
            onClick={() => {
              setToggleCharts("doughnut");
            }}
          >
            <DonutLargeIcon />
          </span>
          <span
            className="tableIcon"
            onClick={() => {
              setToggleCharts("table");
            }}
            style={toggleChart === "table" ? styleToggle : null}
          >
            <TableChartIcon />
          </span>
        </div>
      </div>


    </div>
  );
}
