import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { DatePicker } from "antd";
import moment from "moment";

import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
});

const { RangePicker } = DatePicker;

function Homescreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [rooms, setRooms] = useState([]);
  const [duplicateRooms, setDuplicateRooms] = useState([]);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [searchKey, setSearchKey] = useState("");
  const [type, setType] = useState("all");

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        setError("");
        setLoading(true);
        const response = await axios.get("/api/rooms/getallrooms");
        setRooms(response.data);
        setDuplicateRooms(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchMyAPI();
  }, []);

  function filterByDate(dates) {
    setFromDate(moment(dates[0]).format("DD-MM-YYYY"));
    setToDate(moment(dates[1]).format("DD-MM-YYYY"));

    const tempRooms = duplicateRooms.filter(room => {
      return room.currentbookings.every(booking => {
        return (
          moment(dates[0]).isBefore(booking.fromdate) ||
          moment(dates[1]).isAfter(booking.todate)
        );
      });
    });

    setRooms(tempRooms);
  }

  function filterBySearch() {
    const tempRooms = duplicateRooms.filter(x =>
      x.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setRooms(tempRooms);
  }

  function filterByType(selectedType) {
    setType(selectedType);
    if (selectedType === "all") {
      setRooms(duplicateRooms);
    } else {
      const tempRooms = duplicateRooms.filter(
        room => room.type.toLowerCase() === selectedType.toLowerCase()
      );
      setRooms(tempRooms);
    }
  }

  return (
    <div className="container">
      <div className="row mt-5 bs">
        <div className="col-md-3">
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search rooms"
            value={searchKey}
            onChange={e => setSearchKey(e.target.value)}
            onKeyUp={filterBySearch}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-control"
            value={type}
            onChange={e => filterByType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="delux">Delux</option>
            <option value="non-delux">Non-Delux</option>
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error msg={error} />
        ) : (
          rooms.map((room, index) => (
            <div key={index} className="col-md-9 mt-3" data-aos="flip-down">
              <Room room={room} fromDate={fromDate} toDate={toDate} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Homescreen;
