import axios from "axios";

import { GraphQLClient, gql, request } from "graphql-request";

const read_token = import.meta.env.VITE_readtoken;
const endpoint =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cls3ftox30iyb01w2ybt00agn/master";

export const blogList = async (type = null) => {
  let query;
  if (type) {
    query = gql`
      query Blogs {
        blogs(where: { type: ${type} }) {
          id
          publishDate
          summary
          featuredImage {
            url
          }
          title
        }
      }
    `;
  } else {
    query = gql`
      query Blogs {
        blogs {
          id
          publishDate
          title
          updatedAt
          featuredImage {
            id
          }
          summary
        }
      }
    `;
  }

  try {
    const data = await request(
      endpoint,
      query,
      {},
      { Authorization: `Bearer ${read_token}` },
    );
    return data.blogs; // Return the blogs data
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error; // Re-throw error so caller can handle it.
  }
};

export const blogPost = async (slug) => {
  let query = gql`
  query Blogs {
    blogs(where: {id: "${slug}"}) {
      id
      publishDate
      summary
      title
      featuredImage {
        url
      }
      author {
        firstName
        lastName
        authorImg {
          id
        }
      }
      body {
        html
      }
    }
  }

  `;
  try {
    const data = await request(
      endpoint,
      query,
      {},
      { Authorization: `Bearer ${read_token}` },
    );
    return data.blogs; // Return the blogs data
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error; // Re-throw error so caller can handle it.
  }
};
