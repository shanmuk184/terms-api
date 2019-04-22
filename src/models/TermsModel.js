const db = require('postgres')
const sequelize = new Sequelize('database', 'username', 'password', {
    // gimme postgres, please!
    dialect: 'postgres',
    host: '/path/to/socket_directory'
});

class TermsOfUse extends Model { }
TermsOfUse.init({
    terms_of_use_id: {
        primaryKey: true,
        type:sequelize.INTEGER,
        unique:true,
        allowNull:false
    },
    terms_text: sequelize.TEXT,
    // It is possible to create foreign keys:
    terms_of_use_type_id: {
        type: Sequelize.INTEGER,
        references: {
            // This is a reference to another model
            model: TermsOfUseType,
            // This declares when to check the foreign key constraint. PostgreSQL only.
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
        }
    },
    terms_of_use_agreeablity_id:{
        type: Sequelize.INTEGER,
        references: {
            // This is a reference to another model
            model: TermsOfUseAgreeabilityType,
            // This declares when to check the foreign key constraint. PostgreSQL only.
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
        }
    },
    title:{
        type:sequelize.STRING(50),
        allowNull:false
    },
    url:sequelize.STRING(50),
        
}, { sequelize, modelName: 'terms_of_use' });

class TermsOfUseType extends Model { }
TermsOfUseType.init({
    terms_of_use_type_id: {
        primaryKey: true,
        type:sequelize.INTEGER,
        unique:true,
        allowNull:false
    },
    terms_of_use_desc: {
        type: sequelize.STRING(100),
        allowNull: false,
        defaultValue: true
    }
}, { sequelize, modelName: 'terms_of_use_type' })

class TermsOfUseAgreeabilityType extends Model { }
TermsOfUseAgreeabilityType.init({
    terms_of_use_agreeability_type_id: {
        primaryKey: true,
        type:sequelize.INTEGER,
        unique:true,
        allowNull:false

    },
    name: {
        type: sequelize.STRING(64),
        allowNull: false,
        defaultValue: true
    },
    description: {
        type: sequelize.STRING(100),
        allowNull: false,
        defaultValue: true
    }
}, { sequelize, modelName: 'terms_of_use_agreeability' })
TermsOfUse.hasOne(TermsOfUseType)
TermsOfUse.hasOne(TermsOfUseAgreeabilityType)

// create table 'informix'.terms_of_use(
//     terms_of_use_id DECIMAL(10, 0) NOT NULL,
//     terms_text TEXT,
//     terms_of_use_type_id DECIMAL(5, 0) NOT NULL,
//     create_date DATETIME YEAR TO FRACTION default CURRENT YEAR TO FRACTION,
//     modify_date DATETIME YEAR TO FRACTION default CURRENT YEAR TO FRACTION,
//     title VARCHAR(50) NOT NULL,
//     url VARCHAR(100),
//     terms_of_use_agreeability_type_id DECIMAL(5, 0) DEFAULT 3 NOT NULL
// )
// create table 'informix'.terms_of_use_agreeability_type_lu (
//     terms_of_use_agreeability_type_id DECIMAL(5,0) NOT NULL,
//     name VARCHAR(64) NOT NULL,
//     description VARCHAR(100) NOT NULL
// )
// create table 'informix'.terms_of_use_type (
//     terms_of_use_type_id DECIMAL(5,0) NOT NULL,
//     terms_of_use_type_desc VARCHAR(100),
//     create_date DATETIME YEAR TO FRACTION default CURRENT YEAR TO FRACTION,
//     modify_date DATETIME YEAR TO FRACTION default CURRENT YEAR TO FRACTION
// )
// create table 'informix'.user_terms_of_use_xref (
//     user_id DECIMAL(10,0) NOT NULL,
//     terms_of_use_id DECIMAL(10,0) NOT NULL,
//     create_date DATETIME YEAR TO FRACTION default CURRENT YEAR TO FRACTION,
//     modify_date DATETIME YEAR TO FRACTION default CURRENT YEAR TO FRACTION
// )
// extent size 500 next size 250
// lock mode row;

// revoke all on user_terms_of_use_xref from 'public';
// create table 'informix'.user_terms_of_use_ban_xref (
//     user_id DECIMAL(10,0) NOT NULL,
//     terms_of_use_id DECIMAL(10,0) NOT NULL,
//     create_date DATETIME YEAR TO FRACTION default CURRENT YEAR TO FRACTION
// )

// revoke all on project_role_terms_of_use_xref from 'public';
// create table 'informix'.terms_of_use_dependency(
//     dependency_terms_of_use_id DECIMAL(10, 0) NOT NULL,
//     dependent_terms_of_use_id DECIMAL(10, 0) NOT NULL
// )
// extent size 500 next size 250
// lock mode row;

// revoke all on terms_of_use_dependency from 'public';
// create table 'informix'.state(
//     state_code VARCHAR(2),
//     state_name VARCHAR(35) not null,
//     region_code VARCHAR(3),
//     modify_date DATETIME YEAR TO FRACTION default CURRENT YEAR TO FRACTION,
//     demographic_decline DECIMAL(1, 0)
// )
// extent size 64 next size 64
// lock mode row;

// create table 'informix'.terms_of_use_docusign_template_xref(
//     terms_of_use_id DECIMAL(10, 0) NOT NULL,
//     docusign_template_id VARCHAR(64) NOT NULL
// )

class TermsOfService extends Model { }
TermsOfService.init({
    termsOfUseid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    terms_text: sequelize.TEXT,
    // terms_of_use_type_id:{
    //     foreignKey:true
    // },
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

}, { sequelize, modelName: 'termsOfService' })
module.exports = TermsOfService