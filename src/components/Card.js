import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import "react-datepicker/dist/react-datepicker.css";

function Card(props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [numberOfPersons, setNumberOfPersons] = useState(1);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDateChange = (date) => {
    if (date instanceof Date) {
      setSelectedDate(date);
    }
  };
  
  const handlePersonChange = (event) => {
    setNumberOfPersons(event.target.value);
  };

  const handleBookingConfirmation = () => {
    // Perform additional actions, e.g., send booking details to the server
    handleDialogClose();
  };

  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {props.data.plan}
            </h5>
            <h6 className="card-price text-center">{props.data.price}</h6>
            <hr />
            <ul className="fa-ul">
              {props.data.features.map((feature) => (
                <li className={feature.isEnabled ? "" : "text-muted"}>
                  <span className="fa-li">
                    <i
                      className={`fa ${
                        feature.isEnabled ? "fa-check" : "fa-times"
                      }`}
                    ></i>
                  </span>
                  {feature.name}
                </li>
              ))}
            </ul>
            <button
              onClick={handleDialogOpen}
              className="btn btn-block btn-primary text-uppercase"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Book Now</DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={new Date()}
              filterDate={
                (date) => date.getDay() !== 6 && date.getDay() !== 0 // Disable weekends
              }
              renderInput={(params) => <TextField {...params} />}
              inputFormat="dd/MM/yyyy"
              className="form-control"
              placeholder="Select a date"
            />
          </LocalizationProvider>
          <TextField
            type="number"
            label="Number of Persons"
            value={numberOfPersons}
            onChange={handlePersonChange}
            inputProps={{ min: "1" }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleBookingConfirmation} color="primary">
            Confirm Booking
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Card;
