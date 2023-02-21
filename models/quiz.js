module.exports = (sequelize, Sequelize) => {
    const Quiz = sequelize.define('quiz', { //pendeklarasian kolom
        quiz: {
            type: Sequelize.STRING,
        },
        a: {
            type: Sequelize.STRING,
        },
        b: {
            type: Sequelize.STRING,
        },
        c: {
            type: Sequelize.STRING,
        },
        d: {
            type: Sequelize.STRING,
        },
        key: {
            type: Sequelize.STRING,
        },
        categoryID: {
            type: Sequelize.INTEGER,
        },
        levelId: {
            type: Sequelize.INTEGER,
        },
    });
    return Quiz;
}