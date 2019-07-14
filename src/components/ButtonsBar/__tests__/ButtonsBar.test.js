import ButtonsBar from "../ButtonsBar.vue";

import { mount } from "@vue/test-utils";

describe("ButtonsBar", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(ButtonsBar, {
      propsData: {
        buttons: [
          {
            id: "some1",
            title: "some1"
          },
          {
            id: "some2",
            title: "some2"
          }
        ]
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders correctly", () => {
    const wrapper = mount(ButtonsBar, {
      propsData: {
        buttons: [
          {
            id: "some1",
            title: "some1"
          },
          {
            id: "some2",
            title: "some2"
          }
        ],
        selectedId: "some2"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
