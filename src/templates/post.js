import React from "react"
import Layout from "../components/layout"
import ShareComponent from "../components/social-share"

export default ({ location }) => {
   console.log(location.state);

   const props = {
      title: location.state.post.title,
      content: location.state.post.content,
      postUrl: location.state.post.link
   }
   // const title = location.state.post.title;
   // const content = location.state.post.content;
   // const postUrl = location.state.post.link;

   function htmlDecode(input){
      var e = document.createElement('div');
      e.innerHTML = input;
      // handle case of empty input
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
   }

   return (
      <Layout>
         <h2>{htmlDecode(props.title)}</h2>
         <div dangerouslySetInnerHTML={{ __html: props.content}} />
         <ShareComponent {...props} />
      </Layout>
   )
}
