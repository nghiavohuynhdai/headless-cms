import fetch from 'isomorphic-unfetch';

export async function getHomePageAPI() {
  const res = await fetch("https://cms.ptemagicpractice.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
              query MyQuery {
                posts {
                  nodes {
                    title
                    blocksJSON
                  }
                }
              }
            `,
    }),
  });

  return await res.json();
}

export async function getPostAPI(context) {
  const res = await fetch("https://cms.ptemagicpractice.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
                  query SinglePost($id: ID!, $idType: PostIdType!) {
                      post(id: $id, idType: $idType) {
                          title
                          slug
                          content
                      }
                  }
              `,
      variables: {
        id: context.params.slug,
        idType: "SLUG",
      },
    }),
  });

  return await res.json();
}
