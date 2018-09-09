import React from 'react'
import Alert from './Alert'
import { shallow } from 'enzyme'

describe('Alert Component', () => {
    it('Should render default text if text prop is empty', () => {
        const wrapper = shallow(<Alert />)

        expect(wrapper.find('.alert-label').text()).toEqual('No Text')
    })

    it('Should render a text if text prop is passed', () => {
        const wrapper = shallow(<Alert text='Alert text' />)

        expect(wrapper.find('.alert-label').text()).toEqual('Alert text')
    })

    it('Should not render dismiss button if showDismiss is false', () => {
        const wrapper = shallow(<Alert showDismiss={false} />)

        expect(wrapper.find('.alert-dismiss')).toHaveLength(0)
    })

    it('Should not render component if show prop is false', () => {
        const wrapper = shallow(<Alert show={false} />)

        expect(wrapper.type()).toEqual(null)
    })
})
