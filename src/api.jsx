import axios from "axios";

const read_token = import.meta.env.VITE_readtoken;

export const blogList = async (type=null) => {
  let url
  if (type){
     url = `
    https://api.buttercms.com/v2/posts?auth_token=${read_token}&type=${type}&exclude_body=true`;
    
  } else {
    url = `
    https://api.buttercms.com/v2/posts?auth_token=${read_token}&exclude_body=true`;
    
  }

  return axios.get(url).then((res) => {
    return res.data.data;
  });

 
};

export const blogPost = async (slug) => {
let url=`
  https://api.buttercms.com/v2/posts/${slug}/?auth_token=${read_token}`;



return axios.get(url).then((res) => {
  return res.data.data;
})
}
