test ('http://localhost:8000/animals', () => {
    function callback(response){
        try {
            expect(response).toBe();
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
})