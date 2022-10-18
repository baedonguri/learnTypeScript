const obj1: object = { text: "hello lemon" };

const obj2: object = {
  attachments: [
    {
      fallback: "Required plain-text summary of the attachment.",
      color: "#2eb886",
      pretext: "Optional text that appears above the attachment block",
      author_name: "Bobby Tables",
      author_link: "http://flickr.com/bobby/",
      author_icon: "http://flickr.com/icons/bobby.jpg",
      title: "Slack API Documentation",
      title_link: "https://api.slack.com/",
      text: "Optional text that appears within the attachment",
      fields: [
        {
          title: "Priority",
          value: "High",
          short: false,
        },
      ],
      image_url: "http://my-website.com/path/to/image.jpg",
      thumb_url: "http://example.com/path/to/thumb.png",
      footer: "Slack API",
      footer_icon:
        "https://platform.slack-edge.com/img/default_application_icon.png",
      mrkdwn: true,
      mrkdwn_in: ["pretext", "text"],
      ts: 123456789,
    },
  ],
};

// extend
const obj3 = Object.assign(obj1, obj2);
console.log(obj3);
