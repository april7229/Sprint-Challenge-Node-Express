const express = require( 'express' );
const cors = require( 'cors' );

const actions = require( './data/helpers/actionModel.js' );
const mapper = require( './data/helpers/mappers.js' );
const project = require( './data/helpers/projectModel.js' );
const port = 5000;
const server = express();
server.get( '/api/action' );
server.get( '.api/mappers' );
server.get( '/api/project' );
server.use( express.json() );
server.use( cors() );


server.get( '/', ( req, res ) =>
{
    res.send( 'Hello from server' );

} )

//get the list of actionModel
server.get( '/api/actionModel', ( req, res ) =>
{
    actions

        .get()
        .then( actions =>
        {
            res.json( actions );
        } )
        .catch( error =>
        {
            res.status( 500 ).json( error );
        } )
    
} );

//get by id action
server.get( '/api/actionModel/:id', ( req, res ) =>
{
    const { id } = req.params;

    actions
        .get( id )
        .then( actions =>
        {
            res.json( actions );
    })
        .catch( error =>
        {
            res.status( 500 ).json( error );
    })
} )


//post for action
server.post( '/api/actionModel', ( req, res ) =>
{

    const {project_id, description } = req.body;

    actions
        .insert( project_id,{ description }  )
        .then( actions =>
        {
            res.json(  actions  );
} )
    .catch( error =>
    {
        res.json( { error } );
    });
});
//put for action
server.put( '/api/actionModel/:id', ( req, res ) =>
{
    const { project_id } = req.params;
    const { description } = req.body;
    actions
        .update( project_id, { description } )
        .then( actions =>
        {
            res.json( { actions } );
        } )
        .catch( error =>
        {
            res.json( { error } );
        } );
} );
// delete for action
server.delete( '/api/actionModel/:id', ( req, res ) =>
{
    const { project_id } = req.params;

    users
        .remove(project_id )
        .then( idRemoved =>
        {
            if ( project_idRemoved === 0 )
            {
                return error( 404, 'no such user found' );

            } else
            {
                res.json( { success: 'User Removed' } )
            }
        } )
        .catch( err =>
        {
            return error( 500 );
        } );
} );

//getting list of projectModel
server.get( '/api/projectModel', ( req, res ) =>
{
    
    project
        .get()
        .then( project =>
        {
            res.json( project );
        } )
        .catch( error =>
        {
            res.status( 500 ).son( error );
    })
} );
 // get by id
server.get( '/api/projectModel/:id', ( req, res ) =>
{
    const { id } = req.params;

    project
        .get( id )
        .then( project =>
        {
            res.json( project );
        } )
        .catch( error =>
        {
            res.status( 500 ).json( error );
        } )
} )
//post for action
server.post( '/api/projectModel', ( req, res ) =>
{

    const { project_id } = req.params
    const { description } = req.body;

    project
        .insert( project_id, { description } )
        .then( project =>
        {
            res.json( project );
        } )
        .catch( error =>
        {
            res.json( { error } );
        } );
} );
server.put( '/api/projectModel/:id', ( req, res ) =>
{
    const { project_id } = req.params;
    const { description } = req.body;
    project
        .update( project_id, { description } )
        .then( project =>
        {
            res.json( { project } );
        } )
        .catch( error =>
        {
            res.json( { error } );
        } );
} );
// delete for action
server.delete( '/api/projectModel/i:d', ( req, res ) =>
{
    const { project_id } = req.params;

    project
        .remove( project_id )
        .then( idRemoved =>
        {
            if ( project_idRemoved === 0 )
            {
                return error( 404, 'no such user found' );

            } else
            {
                res.json( { success: 'User Removed' } )
            }
        } )
        .catch( err =>
        {
            return error( 500 );
        } );
} );
server.listen( port, () => { ( `server running....${ port }` ); } )
