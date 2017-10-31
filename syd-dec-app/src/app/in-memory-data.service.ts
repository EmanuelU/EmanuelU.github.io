import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    const sequences = [
       { 
        id: "1c", level: 1, suit:'c', des: "12-14 bal, 18-19 bal or natural",
        options: 
        [
          { 
            id: "1c-1d", level: 1, suit:'d', des: "4+ hearts",
            options:
            [
              { id: "1c-1d-1h", level: 1, suit:'h', des: "2-3 hearts, max 15 points", mod: "xynt"},
              { id: "1c-1d-1s", level: 1, suit:'s', des: "natural", forcing: true },
              { id: "1c-1d-1n", level: 1, suit:'n', des: "2-3 hearts, 18-19 bal" },
              { id: "1c-1d-2c", level: 2, suit:'c', des: "natural, 5+ clubs" },
            ]
          },
          { id: "1c-1h", level: 1, suit:'h', des:"4+ spades",
            options:
            [
              { id: "1c-1h-1s", level: 1, suit:'s', des: "2-3 hearts, max 15 points" },
              { id: "1c-1h-1n", level: 1, suit:'n', des: "2-3 hearts, 18-19 bal" },
              { id: "1c-1h-2c", level: 2, suit:'c', des: "natural, 5+ clubs" },
            ]
          },
          { id: "1c-1s", level: 1, suit:'s', des:"ASK" },
        ]
      },
      { id: "1d", level: 1, suit:'d', des: "4+ diamonds, unbalanced" },
      { id: "1h", level: 1, suit:'h', des: "5+ hearts", options:
        [
          { id: "1h-2h", level: 2, suit:'h', des: "3 hearts, 8-11" },
          { id: "1h-2n", level: 2, suit:'n', des: "4+ hearts, 10+", mod: "jacoby2NT" },
        ] 
      },
      { id: "1s", level: 1, suit:'s', des: "5+ spades", options:
        [
          { id: "1s-2s", level: 2, suit:'s', des: "3 spades, 8-11" },
          { id: "1s-2s", level: 2, suit:'n', des: "4+ spades, 10+", mod: "jacoby2NT" },
        ] 
      },
      { id: "1n", level: 1, suit:'n', des: "15-17 bal" },
    ];

    const modules = [
      { id: "xynt", name: "XY-NT", options:
            [
              { id: "2c", level: 2, suit:'c', des: "forcing 2d", options:
                [
                  { id: "2c-2d", level: 2, suit:'d', des: "forced", options:
                    [
                      { id: "2c-2d-2y", level: 2, suit:'y', des: "inv 5+y" },
                      { id: "2c-2d-2z", level: 2, suit:'z', des: "inv 5y 4z" },
                      { id: "2c-2d-2n", level: 2, suit:'n', des: "inv bal" },
                    ] 
                  },
                ]
               },
              { id: "2d", level: 2, suit:'d', des: "game forcing" },
            ] },
      { id: "jacoby2NT", name: "Jacoby 2NT", options:
            [
              { id: "3c", level: 3, suit:'c', des: "minimum", options:
                [
                  { id: "3c-3d", level: 3, suit:'d', des: "asking", options:
                    [
                      { id: "3c-3d-3h", level: 3, suit:'h', des: "no singleton" },
                      { id: "3c-3d-3s", level: 3, suit:'s', des: "singleton clubs" },
                      { id: "3c-3d-3n", level: 3, suit:'n', des: "singleton diamonds" },
                      { id: "3c-3d-4x", level: 4, suit:'x', des: "singelton oM, control x" },
                    ] 
                  },
                  { id: "3c-3h", level: 3, suit:'h', des: "singleton clubs" },
                  { id: "3c-3s", level: 3, suit:'s', des: "singleton diamonds" },
                  { id: "3c-3n", level: 3, suit:'n', des: "singleton oM" },
                ]
               },
              { id: "3d", level: 3, suit:'d', des: "additional values, no shortness" },
              { id: "3h", level: 3, suit:'h', des: "additional values, singleton clubs" },
              { id: "3s", level: 3, suit:'s', des: "additional values, singleton diamonds" },
              { id: "3n", level: 3, suit:'n', des: "additional values, singleton oM" },
              { id: "4x", level: 4, suit:'x', des: "void x" },
            ] },
    ];

    return {sequences, modules};
  }
}