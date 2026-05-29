import test from 'node:test';import assert from 'node:assert/strict';import {gasBudget,shouldTopUp} from '../src/index.js';
test('estimates gas budget',()=>{assert.equal(gasBudget({transactions:10,avgGasUsdc:25000n}).formatted,'0.25 USDC');assert.equal(shouldTopUp(99n,100n),true);});
