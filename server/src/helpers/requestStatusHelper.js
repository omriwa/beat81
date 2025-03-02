const statusHelper = (req, res,error,data) => {
    if (error) {
        console.log(`error on request uri ${req.originalUrl}-method-${req.method}`, error);
        res.status(500);
    }
    else {
        res.status(200);
    }
    if (data) {
        res.send(data);
    }
    else {
        res.end();
    }

    return res;
}

module.exports = { statusHelper };