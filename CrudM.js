// const { MongoClient, ServerApiVersion } = require("mongodb");
// const faker = require('faker');
// const { tr } = require("faker/lib/locales");


// Replace the placeholders with your credentials and hostname
// const uri = "mongodb+srv://estiven:didier321810@cluster0.mf8ucsz.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// }
// );

// async function run() {
//   try {
    // Connect the client to the server (optional starting in v4.7)
    // await client.connect();


    // const dataBase = client.db('Tienda-SOFF');

    // ---------------------inser de los clientes--------------------------
    //     for (let i = 0; i < 100; i++) {
    //         const cliente = [{
    //             name: faker.name.findName(),
    //             apellido: faker.name.lastName(),
    //             edad: Math.floor(Math.random() * (65 - 7 + 1) + 7),
    //             telefono: faker.phone.phoneNumberFormat(1)
    //           },
    //           {
    //             name: faker.name.findName(),
    //             apellido: faker.name.lastName(),
    //             edad: Math.floor(Math.random() * (65 - 7 + 1) + 7),
    //             telefono: faker.phone.phoneNumberFormat(1)
    //           },

    //   ] ;
    //   const result =  await agregarClientes(dataBase , 'ClientesTienda', cliente ); 
    // };
    // ---------------------inser de los proveedores--------------------------
    //   for (let i = 0; i < 100; i++) {
    //     const proveedor = [{
    //       name: faker.name.findName(),
    //       apellido: faker.name.lastName(),
    //       fecha: fakeDate = new Date(2022, 0, 1, 15, 30, 0),
    //       producto: faker.commerce.productName(),
    //       empresa:faker.company.companyName(),
    //       direccion:faker.address.streetAddress(),
    //     },
    //     {
    //       name: faker.name.findName(),
    //       apellido: faker.name.lastName(),
    //       fecha: fakeDate = new Date(2022, 0, 1, 15, 30, 0),
    //       producto: faker.commerce.productName(),
    //       empresa:faker.company.companyName(),
    //       direccion:faker.address.streetAddress(),
    //     },

    //   ] ;
    //   const result =  await agregarProveedores(dataBase , 'ProveedoresTienda', proveedor ); 
    // };
    // -------------------------------productos------------------------------
    // for (let i = 0; i < 100; i++) {
    //   const producto= [{
    //     nombre: faker.commerce.productName(),
    //     precio: faker.commerce.price(),
    //     color: faker.commerce.color(),
    //     material: faker.commerce.productMaterial(),
    //     department: faker.commerce.department()
    //   },
    //   {
    //     nombre: faker.commerce.productName(),
    //     precio: faker.commerce.price(),
    //     color: faker.commerce.color(),
    //     material: faker.commerce.productMaterial(),
    //     department: faker.commerce.department()
    //   },

    // ] ;
    // const result =  await agregarProductos(dataBase , 'ProductosTienda', producto ); 
    // };

    // -----------------------------------------------------------------------



    // -------------------------Insert One-----------------------------------
    // const productoUno =({
    //   nombre: faker.commerce.productName(),
    //   precio: faker.commerce.price(),
    //   color: faker.commerce.color(),
    //   material: faker.commerce.productMaterial(),
    //   department: faker.commerce.department()
    // });



    // const result = await agregarProductoOne(dataBase, 'ProductosTienda', productoUno);
    // -----------------------------------------------------------------------------


    // ---------------------------------Consulta find--------------------------------------------
    // await encontrarCliente(dataBase, 'ClientesTienda' )
    // -----------------------------------------------------------------------------------------------


    // ----------------------------------------Consulta findOne-----------------------------------------

    // await encontrarClientes(dataBase, 'ClientesTienda' )
    // -----------------------------------------------------------------------------------------------


    // / ----------------------------Actualizar updateOne---------------------------------------------------

    // await ActualizarCliente(dataBase, 'ClientesTienda' );

    // / ----------------------------------------------------------------------------------------------------



    // / ----------------------------Actualizar updateMany---------------------------------------------------

    // await ActualizarClientes(dataBase, 'ClientesTienda' );
    // -----------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------






    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------
  // } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  // }
  // try {
    // Connect the client to the server (optional starting in v4.7)
    // await client.connect();


    // const dataBase = client.db('Tienda-SOFF');

    // ---------------------inser de los clientes--------------------------
    //     for (let i = 0; i < 100; i++) {
    //         const cliente = [{
    //             name: faker.name.findName(),
    //             apellido: faker.name.lastName(),
    //             edad: Math.floor(Math.random() * (65 - 7 + 1) + 7),
    //             telefono: faker.phone.phoneNumberFormat(1)
    //           },
    //           {
    //             name: faker.name.findName(),
    //             apellido: faker.name.lastName(),
    //             edad: Math.floor(Math.random() * (65 - 7 + 1) + 7),
    //             telefono: faker.phone.phoneNumberFormat(1)
    //           },

    //   ] ;
    //   const result =  await agregarClientes(dataBase , 'ClientesTienda', cliente ); 
    // };
    // ---------------------inser de los proveedores--------------------------
    //   for (let i = 0; i < 100; i++) {
    //     const proveedor = [{
    //       name: faker.name.findName(),
    //       apellido: faker.name.lastName(),
    //       fecha: fakeDate = new Date(2022, 0, 1, 15, 30, 0),
    //       producto: faker.commerce.productName(),
    //       empresa:faker.company.companyName(),
    //       direccion:faker.address.streetAddress(),
    //     },
    //     {
    //       name: faker.name.findName(),
    //       apellido: faker.name.lastName(),
    //       fecha: fakeDate = new Date(2022, 0, 1, 15, 30, 0),
    //       producto: faker.commerce.productName(),
    //       empresa:faker.company.companyName(),
    //       direccion:faker.address.streetAddress(),
    //     },

    //   ] ;
    //   const result =  await agregarProveedores(dataBase , 'ProveedoresTienda', proveedor ); 
    // };
    // -------------------------------productos------------------------------
    // for (let i = 0; i < 100; i++) {
    //   const producto= [{
    //     nombre: faker.commerce.productName(),
    //     precio: faker.commerce.price(),
    //     color: faker.commerce.color(),
    //     material: faker.commerce.productMaterial(),
    //     department: faker.commerce.department()
    //   },
    //   {
    //     nombre: faker.commerce.productName(),
    //     precio: faker.commerce.price(),
    //     color: faker.commerce.color(),
    //     material: faker.commerce.productMaterial(),
    //     department: faker.commerce.department()
    //   },

    // ] ;
    // const result =  await agregarProductos(dataBase , 'ProductosTienda', producto ); 
    // };

    // -----------------------------------------------------------------------



    // -------------------------Insert One-----------------------------------
    // const productoUno =({
    //   nombre: faker.commerce.productName(),
    //   precio: faker.commerce.price(),
    //   color: faker.commerce.color(),
    //   material: faker.commerce.productMaterial(),
    //   department: faker.commerce.department()
    // });



    // const result = await agregarProductoOne(dataBase, 'ProductosTienda', productoUno);
    // -----------------------------------------------------------------------------


    // ---------------------------------Consulta find--------------------------------------------
    // await encontrarCliente(dataBase, 'ClientesTienda' )
    // -----------------------------------------------------------------------------------------------


    // ----------------------------------------Consulta findOne-----------------------------------------

    // await encontrarClientes(dataBase, 'ClientesTienda' )
    // -----------------------------------------------------------------------------------------------


    // / ----------------------------Actualizar updateOne---------------------------------------------------

    // await ActualizarCliente(dataBase, 'ClientesTienda' );

    // / ----------------------------------------------------------------------------------------------------



    // / ----------------------------Actualizar updateMany---------------------------------------------------

    // await ActualizarClientes(dataBase, 'ClientesTienda' );
    // -----------------------------------------------------------------------------------------------


    // / ----------------------------Eliminar deleteOne---------------------------------------------------

    // await eliminarRegistroCliente(dataBase, 'ClientesTienda');
    // -----------------------------------------------------------------------------------------------

    // / ----------------------------Eliminar deleteMany---------------------------------------------------

    // await eliminarRegistroClientes(dataBase, 'ClientesTienda');
    // -----------------------------------------------------------------------------------------------


    // / ----------------------------Eliminar drop collection---------------------------------------------------

    // await eliminarCollecion(dataBase, 'ProveedoresTienda');
    // -----------------------------------------------------------------------------------------------

    // ----------------------------elimiar drop databese---------------------------------------------------------
    // await elimiarDB(dataBase);
    // ----------------------------elimiar drop databese---------------------------------------------------------



    // ----------------------------pepilines------------------------------------------------------------------
    //  const result = await pipelinesClientes(client)
    //  result.forEach(e=>{
    //   console.log(e)
    //  })
    //  const result = await pipelinesProductos(client)
    //  result.forEach(e=>{
    //   console.log(e)
    //  })
    // ----------------------------pepilines------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------




  // } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
//   }
// }
// run().catch(console.dir);



// ---------------------inser de los clientes--------------------------
// const agregarClientes= (db, ClientesTienda, cliente) => {
//   try {

//     db.collection(ClientesTienda).insertMany(cliente);
//   }catch (error ) {
//         console.log(error);
//       }
//     }



// ---------------------inser de los proveedores--------------------------
// const agregarProveedores= (db, ProveedoresTienda, proveedor) => {
//   try {

//     db.collection(ProveedoresTienda).insertMany(proveedor);
//   }catch (error ) {
//     console.log(error);
//   }
// }


// ---------------------inser de los productos------------------------------
// const agregarProductos = (db, ProductosTienda, producto) => {
//   try {

//     db.collection(ProductosTienda).insertMany(producto);
//   }catch (error ) {
//     console.log(error);
//   }
// }
//


// -------------------------Insert One-----------------------------------
// const agregarProductoOne = (db, ProductosTienda, productoUno) => {
//   try {

//     db.collection(ProductosTienda).insertOne(productoUno);
//   } catch (error) {
//     console.log(error);
//   }
// }

// ----------------------------consulta Find--------------------------
// async function encontrarCliente(dataBase, ClientesTienda ){

//   const cliente = dataBase.collection("ClientesTienda");
//   const query = { name: "Wallace Romaguera" };
//     const options = {
//       projection: {_id:1, name:1, apellido:1, edad:1,telefono:1 },
//     };
//     const clie = await cliente.findOne(query, options);
//     console.log(clie);
//   }
// ----------------------------consulta Find--------------------------

// ----------------------------consulta FindOne--------------------------

// async function encontrarClientes(dataBase, ClientesTienda ){
//   const cliente = dataBase.collection("ClientesTienda");
//   const query = { edad: { $lt: 45 } };
//   const options = {
//     sort: { name: 1 },
//     projection: { name:1, apellido:1, edad:1,telefono:1 },
//   };
//   const totclient = cliente.find(query, options);
//   await totclient.forEach(console.dir);


// }

// ----------------------------consulta FindOne--------------------------


// ----------------------------Actualizar updateOne--------------------------


// ----------------------------Actualizar updateOne--------------------------
// async function ActualizarCliente(dataBase, ClientesTienda ){
//   const cliente = dataBase.collection('ClientesTienda');
//   const filter = { name: /E/ };
//   const options = { upsert: true };
//   const updateDoc = {
//     $set: {
//       edad: Math.floor(Math.random() * (65 - 7 + 1) + 7),
//     },
//   };
//   const result = await cliente.updateOne(filter, updateDoc, options);
//   console.log(
//     `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
//   );

// }


// ----------------------------Actualizar updateMany--------------------------
// async function ActualizarClientes(dataBase, ClientesTienda ){

//   const cliente = dataBase.collection("ClientesTienda");
//   const filter = { name: /J/ };
//   const updateDoc = {
//     $set: {
//       name: faker.name.findName(),
//       apellido: faker.name.lastName(),
//       edad: Math.floor(Math.random() * (65 - 7 + 1) + 7),
//       telefono: faker.phone.phoneNumberFormat(1)
//     },
//   };
//   const result = await cliente.updateMany(filter, updateDoc);
//   console.log(`Updated ${result.modifiedCount} documents`);

// }

// ----------------------------Actualizar updateMny---------------------------------------------------------

// ----------------------------Actualizar deleteOne---------------------------------------------------------

// async function eliminarRegistroCliente(dataBase, ClientesTienda){
//     const cliente = dataBase.collection('ClientesTienda');
//     const query = {edad: 18};
//     const resultado = await cliente.deleteOne(query);
//     if (resultado.deletedCount === 1) {
//         console.log("se elimino un elemto");
//       } else {
//           console.log("No documents matched the query. Deleted 0 documents.");
//         }



//       }

// ----------------------------Actualizar deleteOne---------------------------------------------------------
// ----------------------------Actualizar deleteMany---------------------------------------------------------
// async function eliminarRegistroClientes(dataBase, ClientesTienda) {
//   const clientes = dataBase.collection('ClientesTienda');
//   const filtro = { name: /B/ };
//   const result = await clientes.deleteMany(filtro);
//   console.log("Deleted " + result.deletedCount + " documents");
// }
// ----------------------------Actualizar deleteMany---------------------------------------------------------


// ----------------------------eliminar drop collection---------------------------------------------------------
// async function eliminarCollecion(dataBase, ProveedoresTienda){
//   dataBase.collection("ProveedoresTienda").drop(function (err, result) {
//     if (err) throw err;
//     if (result) console.log("Collection successfully deleted.");
// });

// }

// ----------------------------eliminar drop collection---------------------------------------------------------


// ---------------------------eliminar drop databese---------------------------------------------------------

// // const dropDataBase = (client)=>{
//     try{
//         const result =  client.db("Tienda-SOFF").dropDatabase()
//         console.log("Se eliminó con éxito la base de datos")
//         return result
//     }catch(error){
//         console.log(error)
//     }
// }
// ----------------------------eliminar drop databese---------------------------------------------------------

      // const result = await dropDataBase(client);
// ----------------------------Actualizar $lookup---------------------------------------------------------
// async function lookupClienteProducto(dataBase){

// }
// ----------------------------Actualizar $lookup---------------------------------------------------------
// ----------------------------pepilines---------------------------------------------------------
// const pepilines=(dataBase, TiednaClientes)=>{
//   try {
//    const cliente = dataBase.collection('ClienteTineda').aggregate([
//     {$match: {edad:{$gt: 20}}},
//     {$project:{_id:1, name:1 , apelllido:1 , edad: 1, telefono: 1}},
//     {$sort: {edad : 1}},
//     {limit: 5}
//    ])
//     return cliente
//   } catch (error) {
//     console.log(error)
    
//   }
// }

// const pipelinesClientes=(client)=>{
//   try {
//    const result = client.db('Tienda-SOFF').collection('ClientesTienda').aggregate([
//     {$match: {edad: {$gt:55} }},
//     {$project:{ name:1 , apellido:1 , edad: 1, telefono: 1}},
//     // {$sort: {name : 1}},
//     {limit: 2}
//    ])
//     return result
//   } catch (error) {
//     console.log(error)
    
//   }
// }
// const pipelinesProductos= (client)=>{
//   try{
//      const result = client.db("Tienda-SOFF").collection("ProductosTienda").aggregate([
//       {$match: {department: /I/}},
//       {$project:{_id:0, name:1, precio:1, color:1, material:1, departament:1}}, 
//      {$sort: {name: -1}},
//      {$limit: 5}
//   ])
//   return result
//   }catch(error){
//       console.log(error)
//   }
// }

// ----------------------------pepilines---------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ESTO ES DE MONGO PARA CREAR LA BASE DE DATOS Y LAS COLECCIONES 
// ESTO ES DE MONGO PARA CREAR LA BASE DE DATOS Y LAS COLECCIONES 
// ESTO ES DE MONGO PARA CREAR LA BASE DE DATOS Y LAS COLECCIONES 
// use('Tienda-SOFF');


// db.createCollection("ClientesTienda", {
//     validator: {
//        $jsonSchema: {
//         properties:{
//              nombre: {
//                 bsonType: "string",
               
//              },
//              apelldio: {
//                 bsonType: "string",
               
//              },
//              edad: {
//                  bsonType: "int",
//                  minimum: 1,
//                  maximum: 200,
                 
//                 },
//             telefono: {
//                 bsonType: "string",
       
//                 },
//         }
//        }
//     }
//  } );
// db.createCollection("ProductosTienda", {
//     validator: {
//        $jsonSchema: {
//         properties:{
//              nombre: {
//                 bsonType: "string",
               
//              },
//              precio: {
//                 bsonType: "string",            
//              },
             
//             color: {
//                 bsonType: "string",
       
//                 },
//             material: {
//                 bsonType: "string",
//                 },
//             department: {
//                 bsonType: "string",
//                 },
//         }
//        }
//     }
//  } );
// db.createCollection("ProveedoresTienda", {
//     validator: {
//        $jsonSchema: {
//         properties:{
//              nombre: {
//                 bsonType: "string",
                 
//               },
//               apellido: {
//                   bsonType: "string",
                 
//               },
//               fecha: {
//                   bsonType: "date",          
//               },
//               producto: {
//                   bsonType: "string",                
//                   },
//               empresa: {
//                   bsonType: "string",        
//                   },
//               direccion: {
//                   bsonType: "string",
//                   },
//         }
//        }
//     }
//  } );
// ---------------------------rrrrrrrrrrrrrrrrrrrrrrrrrrr
// --------------------------------------------------------------------------------