import React from "react";
import renderer from "react-test-renderer";
import Videos from './Index';

describe('Videos component unit test', () => {
    test('Videos empty renders sorry, no videos found', () => {
        const tree = renderer.create(<Videos />).toJSON();

        expect(tree).toMatchSnapshot();
    })

    test('Videos 1 item renders correctly', () => {
        const tree = renderer.create(<Videos videos={["udemy"]} />).toJSON();

        expect(tree).toMatchSnapshot();
    })
})