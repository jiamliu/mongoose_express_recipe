const db = require('../db')
const { Cuisine, Ingredient, Step, Health } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cuisine1 = await Cuisine.create({
        url: 'https://feelgoodfoodie.net/wp-content/uploads/2022/04/Baked-Lamb-Chops-08.jpg',
        name: 'Roasted Lamb Chops',
        history: 'Lamb chops originated in the 17th century in Great Britain and came to be when London chop houses started cooking individual pieces of meat for customers. There are two types of Lamb chops, either rib chops or loin chops, which are cut perpendicular to the spine of the lamb and include the rib & part of the spine.'
    });
    cuisine1.save()

    const cuisine2 = await Cuisine.create({
        url: 'https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage192072050-50-beef-well-banner.png',
        name: 'Beef Wellington',
        history: 'It is generally agreed that the dish was created in celebration of the first Duke of Wellington, Arthur Wellesley, and his victory at the Battle of Waterloo on June 18 1815. The Duke was given his title after defeating Napoleon Bonaparte the year before, and not long after he became Prime Minister. Such an iconic character needed immortalising, so (naturally) they named a pastry ensconced beef dish after him.'
    });
    cuisine2.save()

   const ingredients = [
    {
        ingredients : 'Eight pieces of lamb chops, Half of full lemon, Three pieces of garlic, Cooking oil preferably olive oil, Salt and black pepper powder, Fresh rosemary.',
        cuisine : cuisine1._id
    },
    {
        ingredients : 'Two pounds of center-cut beef tenderloin, 2 tbsp Dijon mustard, 1.5 pounds of mushrooms roughly chopped, 2 tbsp unsalted butter, 12 thin slices prosciutto all-purpose flour, 14 oz frozen puff pastry, One large egg, Salt pepper and other ingredients based on your preference.',
        cuisine : cuisine2._id
    },
   ]
   await Ingredient.insertMany(ingredients)
  console.log('Created ingredients!')

   const steps = [
    {
        steps: 'Roasted lamb chops, a succulent delicacy, are prepared by marinating tender lamb pieces in a blend of garlic, rosemary, olive oil, lemon juice, salt, and pepper. After marination, the lamb racks are roasted in a preheated oven at 450°F until perfectly golden and cooked to medium-rare perfection. The aroma of garlic and rosemary fills the kitchen as the lamb chops develop a flavorful crust while retaining their juicy tenderness inside. Once roasted, the lamb racks are allowed to rest, ensuring the flavors are locked in before carving them into individual chops. This classic dish offers a harmonious balance of savory and aromatic delights.',
        cuisine : cuisine1._id
    },
    {
        steps: 'Beef Wellington, a gourmet masterpiece, begins with a succulent center-cut beef tenderloin, generously seasoned with salt and pepper, then seared to perfection in a hot skillet. Next, a layer of savory Dijon mustard is spread over the beef, adding depth to its flavor profile. A luxurious mushroom duxelles, made from finely chopped mushrooms, shallots, and thyme, is sautéed until golden brown and aromatic, then generously layered over prosciutto. The beef tenderloin is then enveloped in this mushroom mixture and prosciutto, creating a savory blanket of umami goodness. Finally, the beef parcel is encased in delicate puff pastry, brushed with egg wash, and baked until golden brown and delicious. The result is a culinary masterpiece—a symphony of flavors and textures that tantalize the taste buds and leave a lasting impression.',
        cuisine : cuisine2._id
    }
    ]
    await Step.insertMany(steps)
    console.log('Created steps!')

    const health = [
    {
        calorie: '100 cal per serving.',
        health_benefit: 'Lamb chops offer lean protein, vital nutrients like iron and vitamin B12, supporting muscle health and boosting energy levels.',
        cuisine : cuisine1._id
    },
    {
        calorie : '210 cal per serving.',
        health_benefit : 'Beef Wellington provides iron, protein, and essential vitamins. While indulgent, it can be part of a balanced diet, supporting muscle function and overall health when enjoyed in moderation.',
        cuisine : cuisine2._id
    },
    ]
    await Health.insertMany(health)
    console.log('Created health!')

}

const run = async () => {
    await main()
    db.close()
  }
  
  run()
