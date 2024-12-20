import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import styles from './Executive.module.css'; 
import Navbar from './Navbar'; 

const Executive = () => {
  const [application, setApplication] = useState(null);
  const [selectedStage, setSelectedStage] = useState('document_verification'); 
=======
import styles from './Executive.module.css'; // Import the CSS Module

const Executive = () => {
  const [application, setApplication] = useState(null);
  const [selectedStage, setSelectedStage] = useState('document_verification'); // Default to 'document_verification'
>>>>>>> main
  const { applicationId } = useParams();

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/track-application/${applicationId}`);
        const data = response.data;

<<<<<<< HEAD
        console.log('API Response:', data);

        const filteredData = {
          application_id: data.logs_id?.application_id || 'Unknown Application ID',
          status: data.logs_id?.status || 'Unknown Status',
          stage: data.logs_id?.stage || {}, 
=======
        // Log the response for verification
        console.log('API Response:', data);

        // Extract application_id, status, and stage
        const filteredData = {
          application_id: data.logs_id?.application_id || 'Unknown Application ID',
          status: data.logs_id?.status || 'Unknown Status',
          stage: data.logs_id?.stage || {}, // Include stage if needed
>>>>>>> main
          status_logs: data.status_logs || [],
        };

        setApplication(filteredData);
      } catch (error) {
        console.error('Error tracking application:', error);
        alert('Failed to track application.');
      }
    };

    fetchApplication();
  }, [applicationId]);

  if (!application) {
    return <div>Loading...</div>;
  }

<<<<<<< HEAD
  let statusColor;
  switch (application.status) {
    case 'In Progress':
      statusColor = 'orange'; 
      break;
    case 'Verified':
      statusColor = 'green'; 
      break;
    case 'Pending':
      statusColor = 'red'; 
      break;
    default:
      statusColor = 'gray';
      break;
  }

  const renderNestedTable = (nestedObj) => {
    // Define the custom labels here
    const labels = {
      is_completed: 'Completed by Scrutiny',
      success: 'Success', 
      verification_timestamp: 'Time of Verification',
      remark: 'Remark',
      is_allocated: 'Allocated by Member', 
    };

    const formatValue = (key, value) => {
      switch (key) {
        case 'is_completed':
        case 'success':
        case 'is_allocated':
          return value ? 'Yes' : 'No'; 
        case 'verification_timestamp':
          return new Date(value).toLocaleString(); // Format the date and time
        default:
          return value;
      }
    };

    return (
      <table className={styles.stageTable}>
         <tbody>
          {Object.keys(nestedObj).map((key) => {
            const value = formatValue(key, nestedObj[key]);

            // Determine the container style based on the value
            let containerStyle = {};
            if (typeof value === 'string' && (value.toLowerCase() === 'yes' || value.toLowerCase() === 'no')) {
              containerStyle.backgroundColor = value.toLowerCase() === 'yes' ? 'green' : 'red';
              containerStyle.color = 'white';
              containerStyle.padding = '3px 7px';   // Reduced padding
              containerStyle.borderRadius = '4px';  // Smaller border radius
              containerStyle.display = 'inline-block'; 
              containerStyle.textAlign = 'center'
              containerStyle.borderRadius = '15px'
            }

            // Style for the key cell (remains the same)
            const keyCellStyle = {
              color: 'gray',
            };

            return (
              <tr key={key}>
                <td className={styles.keyCell} style={keyCellStyle}>{labels[key] || key}</td>
                <td className={styles.valueCell} style={{ backgroundColor: 'white', textAlign: 'center', color: 'black' }}>
                  <div style={containerStyle}>
                    {value}
                  </div>
                </td>
              </tr>
            );
          })}
=======
  // Determine the status color
  let statusColor;
  switch (application.status) {
    case 'In Progress':
      statusColor = 'orange'; // For "In Progress"
      break;
    case 'Verified':
      statusColor = 'green'; // For "Verified"
      break;
    case 'Pending':
      statusColor = 'red'; // For "Pending"
      break;
    default:
      statusColor = 'gray'; // Default color for unknown status
      break;
  }

  // Render nested tables for each stage
  const renderNestedTable = (nestedObj) => {
    return (
      <table className={styles.stageTable}>
        <tbody>
          {Object.keys(nestedObj).map((key) => (
            <tr key={key}>
              <td className={styles.keyCell}>{key}</td>
              <td className={styles.valueCell}>{JSON.stringify(nestedObj[key])}</td>
            </tr>
          ))}
>>>>>>> main
        </tbody>
      </table>
    );
  };

<<<<<<< HEAD
=======
  // Conditional rendering for different stage tables
>>>>>>> main
  const renderStageContent = () => {
    const stageData = application.stage[selectedStage];

    if (!stageData) {
      return <div>No data available for this stage.</div>;
    }

    return (
      <>
<<<<<<< HEAD
        <h3 className={styles.detailsHeader}>{selectedStage.replace('_', ' ').toUpperCase()} Details</h3>
=======
        <h3>{selectedStage.replace('_', ' ').toUpperCase()} Details</h3>
>>>>>>> main
        {renderNestedTable(stageData)}
      </>
    );
  };

  return (
<<<<<<< HEAD
    <div>
      <Navbar name="Executive" activeKey={applicationId} />

      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h2>Application Status</h2>
          <p>Status: <span className={styles.status} style={{ color: statusColor }}>{application.status}</span></p>
          <div className={styles.options}>
            <button onClick={() => setSelectedStage('document_verification')} className={styles.optionButton}>Scrutiny Details</button>
            <button onClick={() => setSelectedStage('expert_visit_stage')} className={styles.optionButton}>Expert Visit Details</button>
            <button onClick={() => setSelectedStage('final_stage')} className={styles.optionButton}>Executive Details</button>
          </div>
        </div>

        <div className={styles.mainContent}>
          <h2>Application Details</h2>
          {renderStageContent()}
        </div>
=======
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <h2>Application Status</h2>
        <p>Status: <span className={styles.status} style={{ color: statusColor }}>{application.status}</span></p>
        <div className={styles.options}>
          <button onClick={() => setSelectedStage('document_verification')} className={styles.optionButton}>Document Verification</button>
          <button onClick={() => setSelectedStage('expert_visit_stage')} className={styles.optionButton}>Expert Visit</button>
          <button onClick={() => setSelectedStage('final_stage')} className={styles.optionButton}>Final Stage</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={styles.mainContent}>
        <h2>Application Details</h2>
        {renderStageContent()}
>>>>>>> main
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Executive;
=======
export default Executive;
>>>>>>> main
