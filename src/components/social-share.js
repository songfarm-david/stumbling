import React from "react"

import { ShareBlockStandard, ShareButtonIconOnly } from 'react-custom-share';
import {
   FaTwitter,
   FaFacebook,
   FaGooglePlus,
   FaLinkedin,
   FaEnvelope
} from "react-icons/fa";

const ShareComponent = props => {
  // create object with props for shareBlock
  // console.log('share component props?', props);
  const shareBlockProps = {
    url: props.postUrl,
    button: ShareButtonIconOnly,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'GooglePlus', icon: FaGooglePlus },
      { network: 'Linkedin', icon: FaLinkedin },
      { network: 'Email', icon: FaEnvelope }
    ],
	 // text: short version of message you want to share with the url
	 text: props.title,
	 // longtext: additional text message, if it's possible and set it's concatenated to the `text` and serve as a comment with the shared url
	 // longtext: `Lessons learned while on a journey of spiritual realization`,
	 /* OPTIONAL props */
	  // className: CSS style class applied to the button
	  className: 'social-share-buttons',
	  // link: 'share link' for not built-in networks
	  //link: PropTypes.string,
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};

export default ShareComponent
