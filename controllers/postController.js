const posts= require("../data/posts.js")

const index = (req, res) => {
    res.json(posts);
    // res.send('Lista dei post');
};

const show = (req, res) => {

    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);

    // res.send('Dettagli di un post');
    res.status(200).json(post);
};

const store = (req, res) => {
    res.send('Creazione di un nuovo post');
};

const update = (req, res) => {
    res.send('Modifica di un post');
};

const destroy = (req, res) => {

    const postId = parseInt(req.params.id);
    const post = posts.findIndex(post => post.id === postId);

    posts.splice(post, 1);

    console.log(posts)

    res.status(204).send(posts);
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};