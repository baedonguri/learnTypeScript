import request from "request";
const DOG_API_URL = "https://api.thedogapi.com/";
const DOG_API_KEY = "";

let dog = async (sub_id: string): Promise<any> => {
  // you need an API key to get access to all the iamges, or see the requests you've made in the stats for your account
  let headers = {
    "X-API-KEY": DOG_API_KEY,
  };
  let query_params = {
    has_breeds: true, // we only want images with at least one breed data object - name, temperament etc
    mime_types: "jpg,png", // we only want static images as Discord doesn't like gifs
    size: "small", // get the small images as the size is prefect for Discord's 390x256 limit
    sub_id: sub_id, // pass the message senders username so you can see how many images each user has asked for in the stats
    limit: 1, // only need one
  };

  // convert this obejc to query string
  let queryString = JSON.stringify(query_params);
  let _url = DOG_API_URL + `v1/images/search?${queryString}`;
  request.get(_url, (err, res) => {
    if (err) console.log(err);
    console.log(res.body);
  });
};

dog("hello");
