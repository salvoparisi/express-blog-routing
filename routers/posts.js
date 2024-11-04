const posts = require('../db.js');

index = (req, res) => {
    const html = `
    <html>
      <body>
        <h1>Lista dei Post</h1>
        <ul>
          ${posts.map(post => `<li>${post.title}</li>`).join('')}
        </ul>
      </body>
    </html>
  `;
    res.send(html);
};

show = (req, res) => {
    const slug = req.params.slug;
    const post = posts.find(post => post.slug === slug);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ error: "Post non trovato" });
    }
};

module.exports = {
    index,
    show
}
