import axios from "axios";

export const Request = (url, data, token, reqtype) => {
  axios({
    method: `${reqtype}`,
    url,
    data
    // headers : {
    //   "Authorization" : `Bearer ${token}`
    // }
  })
    .then(res => res.data)
    .catch(err => console.log(`${reqtype} / ${url}`, err));
};
