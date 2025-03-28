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
    res.send('Eliminazione di un post');
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};