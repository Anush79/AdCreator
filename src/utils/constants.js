export const usersData =[
 
  {
    id:1,
    group:"Male",
    clicks:348,
    cost :12528 ,
    conversions:42 ,
    revenue: 62118,
  },{
    id:2,
    group:"female",
    clicks:692,
    cost : 24912,
    conversions: 35,
    revenue:5175 ,
  },
  {
    id:3,
    group:"Unknown",
    clicks:105,
    cost :3943 ,
    conversions: 3,
    revenue: 4489,
  }
  
]

export const adInsights = [
  {
    campaigns: "Cosmetics",
    clicks: 712,
    cost: 4272,
    conversions: 8,
    revenue: 16568
  },
  {
    campaigns: "Serums",
    clicks: 3961,
    cost: 27331,
    conversions: 115,
    revenue: 362526
  },
  {
    campaigns: "Facewash",
    clicks: 9462,
    cost: 76831,
    conversions: 123,
    revenue: 266800
  },
  {
    campaigns: "Shampoos",
    clicks: 439,
    cost: 2151,
    conversions: 5,
    revenue: 11029
  }, {
    campaigns: "Conditioners",
    clicks: 1680,
    cost: 3864,
    conversions: 49,
    revenue: 175245
  },
  {
    campaigns: "FaceWash 2",
    clicks: 4978,
    cost: 29370,
    conversions: 189,
    revenue: 623106
  }
]

export const actionTypes = {
    SORT_BY_CLICKS  : "SORT_BY_CLICKS",
    SORT_BY_CATEGORIES  : "SORT_BY_CATEGORIES",
    SORT_BY_COST  : "SORT_BY_COST ",
    SORT_BY_CONVERSIONS : "SORT_BY_CONVERSIONS",
    SORT_BY_REVENUE : "SORT_BY_REVENUE",
    SELECT_MATRIX:"SELECT_MATRIX",
    SORT_BY_NAME:"SORT_BY_NAME"
}