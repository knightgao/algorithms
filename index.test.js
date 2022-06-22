import { describe, it,expect } from 'vitest'
import {getPath} from "./index.js"

describe('happy path', () => {
    it('host1 => host4',  () => {
        const nodeList= [
            {
                source:'host1',
                target:'host2',
            },
            {
                source:'host1',
                target:'host3',
            },
            {
                source:'host2',
                target:'host4',
            },
            {
                source:'host2',
                target:'host5',
            },
            {
                source:'host3',
                target:'host5',
            },
            {
                source:'host4',
                target:'host5',
            },
            {
                source:'host4',
                target:'host6',
            },
            {
                source:'host5',
                target:'host6',
            },
        ]
        const result = getPath(nodeList,"host1","host4")
        expect(result).toEqual( [["host1","host2","host4"]])
    },0)
})
