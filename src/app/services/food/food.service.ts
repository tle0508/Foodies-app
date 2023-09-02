import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/medels/Food';
import { Tag } from 'src/app/shared/medels/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food => food.id==id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food=>food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

  }

  getAllTags():Tag[]{
    return [
      {name:'All',count:6},
      {name:'fastfood',count:3},
      {name:'Pizza',count:1},
      {name:'Hamburger',count:1},
      {name:'Kabab',count:1},
      {name:'Pasta',count:1},
      {name:'Grill',count:2},
    ];
  }

  getAllFoodsByTag(tag:string):Food[]{
    if(tag=="All")
    return this.getAll();
    else
    return this.getAll().filter(food=>food.tags?.includes(tag));
  }

  getAll():Food[]{
    return[
      {
        id:1,
        name:'Hamburger',
        price:250,
        cookTime:'10-20',
        favorite:true,
        origins:['asia','france'],        
        imageUrl:'assets/images/foods/food-1.jpg',
        tags:['fastfood','Hamburger']
      },
      {
        id:2,
        name:'Pizza',
        price:500,
        cookTime:'20-40',
        favorite:true,
        origins:['america','france'],      
        imageUrl:'assets/images/foods/food-2.jpg',
        tags:['fastfood','Pizza']
      },
      {
        id:3,
        name:'Kebab',
        price:200,
        cookTime:'10-20',
        favorite:false,
        origins:['asia','france'],
        imageUrl:'assets/images/foods/food-3.jpg',
        tags:['fastfood','Kabab']
      },
      {
        id:4,
        name:'Chicken grilled',
        price:540,
        cookTime:'30-45',
        favorite:true,
        origins:['asia','america'],
        imageUrl:'assets/images/foods/food-4.jpg',
        tags:['Grill']
      },
      {
        id:5,
        name:'Pasta',
        price:190,
        cookTime:'10-20',
        favorite:false,
        origins:['america','france'],
        imageUrl:'assets/images/foods/food-5.jpg',
        tags:['Pasta']
      },
      {
        id:6,
        name:'Salmaon grills',
        price:370,
        cookTime:'15',
        favorite:true,
        origins:['asia','france'],
        imageUrl:'assets/images/foods/food-6.jpg',
        tags:['Grill']
      }
    ]
  }
}
