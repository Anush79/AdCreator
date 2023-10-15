import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DoughnutChart } from "../components/DoughnutChart";
import { actionTypes } from "../utils/constants";
import { calculateTotal } from "../utils/utilityFunctions";

import UpDownArrow from "../components/UpDownArrow";
export default function Dashboard() {
  const [toggleChart, setToggleCharts] = useState("doughnut");
  const { SELECT_MATRIX, SORT_BY_CLICKS ,SORT_BY_NAME} = actionTypes;
  const dispatch = useDispatch();
  const cosmeticAds = useSelector((state) => state?.cosmeticAds);
  const users = useSelector((state) => state?.users);
  const [sorting, setSorting] = useState(""); //toggle sorting either ascending or descending
  const styleToggle = {
    background: "#0096ff",
    padding: "10px 9px 5px 9px",
    borderRadius: "25px",
    color: "#fff",
  };
  useEffect(() => {
    dispatch({ type: SELECT_MATRIX, payload: "clicks" });
  }, [dispatch]);
  return (
    <div className="dashboard">
      <div className="dataContainer">
        <div className="tableName">
          {" "}
          Ad Insights
          <span className="lightText" title="Help">
            <HelpOutlineIcon />
          </span>{" "}
        </div>
        <table>
          <thead>
            <tr>
              <th className="right_align" onClick={() => {
                  setSorting(!sorting);
                  dispatch({
                    type: SORT_BY_NAME,
                    payload: { table: "cosmeticAds", toggle: sorting },
                  });
                }} >
                Campaigns <UpDownArrow />
              </th>
              <th
                onClick={() => {
                  setSorting(!sorting);
                  dispatch({
                    type: SORT_BY_CLICKS,
                    payload: { table: "cosmeticAds", toggle: sorting, prop: "clicks" },
                  });
                }}
              >
                Clicks <UpDownArrow />
              </th>
              <th
                onClick={() => {
                  setSorting(!sorting);
                  dispatch({
                    type: SORT_BY_CLICKS,
                    payload: { table: "cosmeticAds", toggle: sorting, prop: "cost" },
                  });
                }}
              >
                Cost <UpDownArrow />
              </th>
              <th
                onClick={() => {
                  setSorting(!sorting);
                  dispatch({
                    type: SORT_BY_CLICKS,
                    payload: { table: "cosmeticAds", toggle: sorting, prop: "conversions" },
                  });
                }}
              >
                Conversions <UpDownArrow />
              </th>
              <th
                onClick={() => {
                  setSorting(!sorting);
                  dispatch({
                    type: SORT_BY_CLICKS,
                    payload: { table: "cosmeticAds", toggle: sorting, prop: "revenue" },
                  });
                }}
              >
                Revenue <UpDownArrow />
              </th>
            </tr>
          </thead>
          <tbody>
            {cosmeticAds?.map((item) => (
              <tr key={item.id}>
                <td className="right_align" data-label="campaigns">{item?.campaigns}</td>
                <td data-label="clicks">{item?.clicks.toLocaleString("en-IN")}</td>
                <td data-label="cost">USD {item?.cost.toLocaleString("en-IN")}</td>
                <td data-label="conversions">{item?.conversions.toLocaleString("en-IN")}</td>
                <td data-label="revenue">{item?.revenue.toLocaleString("en-IN")}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="right_align">Total</td>
              <td>
                {calculateTotal(cosmeticAds, "clicks").toLocaleString("en-IN")}
              </td>
              <td>
                USD {calculateTotal(cosmeticAds, "cost").toLocaleString("en-IN")}
              </td>
              <td>
                {calculateTotal(cosmeticAds, "conversions").toLocaleString(
                  "en-IN"
                )}
              </td>
              <td>
                {calculateTotal(cosmeticAds, "revenue").toLocaleString("en-IN")}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="dataContainer">
        <div className="tableName">
          {" "}
          Ad Insights
          <span className="matric">
            {toggleChart === "doughnut" && (
              <span>
                <select
                  name="set matrix"
                  id=""
                  onChange={(e) => {
                    dispatch({ type: SELECT_MATRIX, payload: e.target.value });
                  }}
                >
                  <option value="clicks">Clicks</option>
                  <option value="cost">Cost</option>
                  <option value="conversions">Conversions</option>
                  <option value="revenue">Revenue</option>
                </select>
              </span>
            )}
            <span className="lightText" title="Help">
              <HelpOutlineIcon />
            </span>{" "}
          </span>
        </div>
       
        {toggleChart === "doughnut" ? (
          <DoughnutChart />
        ) : (
          <table>
            <thead>
              <tr>
                <th className="right_align" >
                  Group{" "}
                  <UpDownArrow />
                </th>
                <th onClick={() => {
                  setSorting(!sorting);
                  dispatch({
                    type: SORT_BY_CLICKS,
                    payload: { table: "users", toggle: sorting, prop: "clicks" },
                  });
                }}>
                  Clicks{" "}
                  <UpDownArrow />
                </th>
                <th onClick={() => {
                  setSorting(!sorting);
                  dispatch({
                    type: SORT_BY_CLICKS,
                    payload: { table: "users", toggle: sorting, prop: "cost" },
                  });
                }}>
                  Cost{" "}
                  <UpDownArrow
                    onClick={() => {
                      setSorting(!sorting);
                    }}
                  />
                </th>
                <th onClick={() => {
                  setSorting(!sorting);
                  dispatch({
                    type: SORT_BY_CLICKS,
                    payload: { table: "users", toggle: sorting, prop: "conversions" },
                  });
                }}>
                  Conversions{" "}
                  <UpDownArrow
                    onClick={() => {
                      setSorting(!sorting);
                    }}
                  />
                </th>
                <th onClick={() => {
                  setSorting(!sorting);
                  dispatch({
                    type: SORT_BY_CLICKS,
                    payload: { table: "users", toggle: sorting, prop: "revenue" },
                  });
                }}>
                  Revenue{" "}
                  <UpDownArrow
                    onClick={() => {
                      setSorting(!sorting);
                    }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item) => (
                <tr>
                  <td data-label="Gender"  className="right_align">{item?.group}</td>
                  <td data-label="Clicks" >{item?.clicks.toLocaleString("en-IN")}</td>
                  <td data-label="cost">USD {item?.cost.toLocaleString("en-IN")}</td>
                  <td data-label="conversions">{item?.conversions.toLocaleString("en-IN")}</td>
                  <td data-label="revenue">{item?.revenue.toLocaleString("en-IN")}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="right_align">Total</td>
                <td>
                  {calculateTotal(users, "clicks").toLocaleString("en-IN")}
                </td>
                <td>
                  USD{" "}
                  {calculateTotal(users, "cost").toLocaleString("en-IN")}
                </td>
                <td>
                  {calculateTotal(users, "conversions").toLocaleString(
                    "en-IN"
                  )}
                </td>
                <td>
                  {calculateTotal(users, "revenue").toLocaleString("en-IN")}
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
            <TableChartOutlinedIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
