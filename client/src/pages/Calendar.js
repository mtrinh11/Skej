import React from "react";
import { connect } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {

  const mapStateToProps = (state) => {
    return {
      
    };
  };
  
  const mapActionToProps = (dispatch) => {
    return {
      
    };
  };

  const handleDateClick = (e) => {
    alert(e.dateStr)
  }

  return (
    <div className="calendar">
      <FullCalendar 
      plugins={[timeGridPlugin, interactionPlugin]} 
      initialView="timeGridWeek"
      editable="True"
      droppable="True"
      selectable="True"
      slotEventOverlap="True"
      nowIndicator="True"
      dateClick={handleDateClick}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapActionToProps)(Calendar);
