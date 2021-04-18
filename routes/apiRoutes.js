/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();
/// /////////////////////////////////
/// ////orders Endpoints////////
/// /////////////////////////////////

// Get all database records from the Orders table
router.get('/orders', async (req, res) => {
  try {
    const orderItem = await db.orders.findAll();
    const reply = orderItem.length > 0 ? { data: orderItem} : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get an individual element by id from orders table
router.get('/orders/:order_id', async (req, res) => {
  try {
    const orderItem = await db.orders.findAll({
      where: {
        order_id: req.params.order_id
      }
    });
    res.json(orderItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get a set of records by client query
// BROKEN NEED TO FIX
router.get('/orders/:orderMin/:orderMax', async (req, res) => {
  try {
    const orderItem = await db.orders.findAll({
      where: {
        order_id: req.params.order_id
      }
    });
    res.json(orderItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get a set of records by client query
/* router.get('/order/:order_id,order_id2', async (req, res) => {
  try {
    const orderItem = await db.orders.findAll({
      where: {
        order_id: req.params.order_id
      }
    });
    res.json(orderItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
}); */

// Add a new record to the database in orders table
router.post('/orders', async (req, res) => {
  try {
    const newOrderItem = await db.orders.create({
      order_id: req.body.order_id,
      item_id: req.body.item_id,
      delivery_id: req.body.delivery_id,
      customer_id: req.body.customer_id
    });
    res.json(newOrderItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Update or change record in orders table

router.put('/orders', async (req, res) => {
  try {
    await db.orders.update(
      {
        item_id: req.body.item_id,
        delivery_id: req.body.delivery_id
      },
      {
        where: {
          order_id: req.body.order_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Delete an individual record by id
router.delete('/orders/:order_id', async (req, res) => {
  try {
    await db.orders.destroy({
      where: {
        order_id: req.params.order_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////deliveries Endpoints////////
/// /////////////////////////////////

// Get all database records from the delivery table
router.get('/deliveries', async (req, res) => {
  try {
    const deliveryItem = await db.deliveries.findAll();
    const reply = deliveryItem.length > 0 ? { data: deliveryItem} : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get an individual element by id from deliveries table
router.get('/deliveries/:delivery_id', async (req, res) => {
  try {
    const deliveryItem = await db.deliveries.findAll({
      where: {
        delivery_id: req.params.delivery_id
      }
    });
    res.json(deliveryItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get a set of records by client query
// BROKEN NEED TO FIX
// router.get('/orders/:orderMin/:orderMax', async (req, res) => {
//   try {
//     const orderItem = await db.orders.findAll({
//       where: {
//         order_id: req.params.order_id
//       }
//     });
//     res.json(orderItem);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// Add a new record to the database in deliveries table
router.post('/deliveries', async (req, res) => {
  try {
    const newDeliveryItem = await db.deliveries.create({
      delivery_id: req.body.delivery_id,
      customer_address: req.body.customer_address,
      stores_store_id: req.body.stores_store_id,
      customer_id: req.body.customer_id
    });
    res.json(newDeliveryItem);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Update or change record in deliveries table
router.put('/deliveries', async (req, res) => {
  try {
    await db.deliveries.update(
      {
        customer_address: req.body.customer_address,
        stores_store_id: req.body.stores_store_id,
        customer_id: req.body.customer_id
      },
      {
        where: {
          delivery_id: req.body.delivery_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Delete an individual record by id
router.delete('/deliveries/:delivery_id', async (req, res) => {
  try {
    await db.deliveries.destroy({
      where: {
        delivery_id: req.params.delivery_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Product Families Endpoints////////
/// /////////////////////////////////

// Get all database records from the families table
router.get('/productFamilies', async (req, res) => {
  try {
    const family = await db.productFamilies.findAll();
    const reply = family.length > 0 ? { data: family} : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get an individual element by id from families table
router.get('/productFamilies/:family_id', async (req, res) => {
  try {
    const family = await db.productFamilies.findAll({
      where: {
        family_id: req.params.family_id
      }
    });
    res.json(family);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get a set of records by client query
// BROKEN NEED TO FIX
// router.get('/orders/:orderMin/:orderMax', async (req, res) => {
//   try {
//     const orderItem = await db.orders.findAll({
//       where: {
//         order_id: req.params.order_id
//       }
//     });
//     res.json(orderItem);
//   } catch (err) {
//     console.error(err);
//     res.error('Server error');
//   }
// });

// Add a new record to the database in families table
router.post('/productFamilies', async (req, res) => {
  try {
    const newFamily = await db.deliveries.create({
      family_id: req.body.family_id,
      family_name: req.body.family_name
    });
    res.json(newFamily);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Update or change record in families table
router.put('/productFamilies', async (req, res) => {
  try {
    await db.productFamilies.update(
      {
        family_id: req.body.family_id,
        family_name: req.body.family_name
      },
      {
        where: {
          family_id: req.body.family_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Delete an individual family record by id
router.delete('/productFamilies/:family_id', async (req, res) => {
  try {
    await db.productFamilies.destroy({
      where: {
        family_id: req.params.family_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////stores Endpoints////////
/// /////////////////////////////////


// Get all database records from the store table
router.get('/stores', async (req, res) => {
  try {
    const store = await db.stores.findAll();
    const reply = store.length > 0 ? { data: store} : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get an individual element by id from stores table
router.get('/stores/:store_id', async (req, res) => {
  try {
    const store = await db.stores.findAll({
      where: {
        store_id: req.params.store_id
      }
    });
    res.json(store);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});



// Add a new record to the database in stores table
router.post('/stores', async (req, res) => {
  try {
    const newStore = await db.stores.create({
      store_id: req.body.store_id,
      store_address_line1: req.body.store_address_line1,
      store_city:req.body.store_city,
      store_state:req.body.store_state,
      store_zip_code: req.body. store_zip_code
    });
    res.json(newStore);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Update or change record in stores table
router.put('/stores', async (req, res) => {
  try {
    await db.stores.update(
      {
        store_id: req.body.store_id,
        store_address_line1: req.body.store_address_line1,
        store_city:req.body.store_city,
        store_state:req.body.store_state,
        store_zip_code: req.body. store_zip_code
      },
      {
        where: {
          store_id: req.body.store_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Delete an individual store record by id
router.delete('/stores/:store_id', async (req, res) => {
  try {
    await db.stores.destroy({
      where: {
        store_id: req.params.store_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
