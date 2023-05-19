/*
sample format to add new article
    {
        title: 'Sample Article',
        author: 'John Doe',
        date: 'May 20, 2023',
        headlinetext: 'Sample Article Headline Phrase',
        content: `
          <p>This is a multi-paragraph article.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <p>More content...</p>
        `,
        imageUrl: 'https://example.com/image.jpg',
    },
*/

export const articles = [
    {
        title: 'Unveiling the Power of Sarcasm Detection in Sentiment Analysis',
        author: 'Dumindu Sameendra',
        date: 'May 20, 2023',
        content: `
        <h2>Introduction:</h2>
        <p>
          Sentiment analysis has become a valuable tool in understanding the emotions and opinions expressed in text data. However, traditional sentiment analysis often falls short when it comes to detecting sarcasm, a linguistic phenomenon where the intended meaning is often the opposite of the literal words used. This is where sarcasm detection steps in, providing a deeper and more accurate understanding of sentiment analysis. In this blog post, we will explore the benefits of sarcasm detection in sentiment analysis and how it can enhance the interpretation of textual data.
        </p>
        <h2>Enhanced Accuracy:</h2>
        <p>
          Sarcasm can heavily influence the sentiment conveyed in a text. By detecting sarcasm, sentiment analysis models can accurately identify the true sentiment behind sarcastic remarks. This significantly improves the accuracy of sentiment analysis, ensuring that the sentiment analysis results are not skewed by sarcastic comments.
        </p>
        <h2>Avoiding Misinterpretation:</h2>
        <p>
          Without sarcasm detection, sentiment analysis may misinterpret sarcastic remarks as literal expressions, leading to misleading conclusions. Sarcasm detection allows sentiment analysis models to distinguish between genuine positive or negative sentiments and sarcastic remarks, preventing misinterpretations and providing a more nuanced understanding of the underlying sentiment.
        </p>
        <h2>Improved Decision Making:</h2>
        <p>
          Sarcasm is prevalent in social media, online reviews, and customer feedback. By incorporating sarcasm detection in sentiment analysis, businesses and brands can gain valuable insights into how customers truly feel about their products or services. This enables them to make more informed decisions based on accurate sentiment analysis, leading to better strategies for marketing, product development, and customer satisfaction.
        </p>
        <h2>Fine-Grained Sentiment Analysis:</h2>
        <p>
          Sarcasm detection enables sentiment analysis models to capture fine-grained sentiments, including subtle nuances and irony in text. By understanding sarcastic expressions, sentiment analysis can accurately reflect the sentiment of the writer, even when the words used may suggest otherwise. This fine-grained analysis provides a more comprehensive view of the sentiment landscape, empowering businesses to tailor their responses and strategies accordingly.
        </p>
        <h2>Contextual Understanding:</h2>
        <p>
          Sarcasm heavily relies on context, cultural references, and linguistic cues. By incorporating sarcasm detection, sentiment analysis models develop a deeper understanding of the context surrounding the text. This contextual understanding allows for more accurate sentiment analysis, as the models can grasp the intended meaning of sarcastic remarks within their specific context.
        </p>
        <h2>Enhanced Customer Engagement:</h2>
        <p>
          For brands and businesses, sarcasm detection in sentiment analysis opens up opportunities for better customer engagement. By correctly identifying and addressing sarcastic comments, businesses can demonstrate their understanding and empathy towards customer sentiment, fostering positive relationships and improving customer satisfaction.
        </p>
        <h2>Conclusion:</h2>
        <p>
          Sarcasm detection is a crucial component of sentiment analysis that adds a new layer of accuracy and depth to the interpretation of textual data. By accurately identifying sarcasm, sentiment analysis models can provide more nuanced and reliable insights into sentiment, leading to better decision making, improved customer engagement, and enhanced strategies for businesses and brands. Embracing sarcasm detection in sentiment analysis unlocks the full potential of understanding sentiment in the ever-evolving landscape of textual data.
        </p>
        `,
        imageUrl: 'https://leadx.org/wp-content/uploads/2017/05/sarcasm-2015186_1920.jpg',
    },
    {
      title: 'Article with Image',
      author: 'Jane Smith',
      date: 'May 19, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsadsadas...',
      imageUrl:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    },
    {
        title: 'Lorem Ipsum',
        author: 'John Doe',
        date: 'May 18, 2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... More content here',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      },
      {
        title: 'Article with Image',
        author: 'Jane Smith',
        date: 'May 19, 2023',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      },
      // Add more articles as needed
  ];
