import axios from "axios";

const API_URL = "/api/epics/";

//create new issue

const createIssue = async (issueData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, issueData, config);

  return response.data;
};

//delete issue

const deleteIssue = async (issueId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + issueId, config);

  return response.data;
};

// get all issues
const getIssues = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + id, config);

  return response.data;
};

//update issue

const updateIssue = async (issueData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + issueData.issueId,
    issueData.issueData,
    config
  );

  return response.data;
};

const issueService = {
  createIssue,
  getIssues,
  deleteIssue,
  updateIssue,
};

export default issueService;
