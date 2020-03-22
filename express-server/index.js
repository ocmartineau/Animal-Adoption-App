//add dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');

//initiate the app
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

//setting the port
const port = 8000;

//listen to the port
app.listen(port)

app.get('/', (req, res) => {
    res.send(`Server is running on port ${port}`)
})

app.get('/animals', (req, res) =>{
    res.send([
        {
            id: 1,
            name: 'Roscoe',
            type: 'Dog',
            image: 'https://vignette.wikia.nocookie.net/dragonage/images/9/9d/Kaddis_2.jpg/revision/latest?cb=20110603041252',
            description: 'Loyal guard breed.'
        },

        {
            id: 2,
            name: 'Lovely',
            type: 'Dog',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/70b9e2f7-619d-441f-88f7-26cf1ed3c1d7/dbfpqr2-d8b2a474-5b8d-4fa2-900c-4220c09df414.png/v1/fill/w_1024,h_663,q_80,strp/torm_s_mount_dracolisk_by_frosted_gears_dbfpqr2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjYzIiwicGF0aCI6IlwvZlwvNzBiOWUyZjctNjE5ZC00NDFmLTg4ZjctMjZjZjFlZDNjMWQ3XC9kYmZwcXIyLWQ4YjJhNDc0LTViOGQtNGZhMi05MDBjLTQyMjBjMDlkZjQxNC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7HDbZOxj5S73xZsgaNpf-27P7IiPRuO_HBOSt6HlcM0',
            description: `A little shy at first, but won't leave your side soon enough.` // note the backticks so we don't have to escape!
          }
    ])
})