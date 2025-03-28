//Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers.

const index = (req, res) => {
    res.send('Lista dei post');
};

const show = (req, res) => {
    res.send('Dettagli di un post');
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