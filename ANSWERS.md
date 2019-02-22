1.	What are PropTypes used for? Please describe why it's important to type check our data in JavaScript. PropTypes are used to verify props data--both the type and that it is actually there (when using .isRequired). It is most commonly used to verify the data type from an api but I can say first hand that I often end up changing a data type throughout app development so getting a warning about an unexpected data type really helps squash bugs fast.

2.	Describe a life-cycle event in React? componentDidMount() -> This is easily the most used life cycle method that is invoked once the component is mounted, strangely enough. What that means is the constructor runs, render is invoked, and then the component is mounted. Usually an api call is made here so that way the component can initially load (and thus you can display something like "Loading") instead of everything frozen until the api call is complete (which would be the case if you ran the call in the constructor).

3.	Explain the details of a Higher Order Component? HOC = component-ception: a component that accepts a component as an argument. HOCs allow you to toggle among any number of components while the state of the parent is preserved and can thus be passed to the children.

4.	What are three different ways to style components in React? Explain some of the benefits of each. a) Styled components (CSS in JS) - perhaps the greatest advantage is styled components are isolated and thus do not receive inheritance. While it means you do have to explicitly state everything each time, it also means you should see fewer unexpected behaviors.

b) Import "./cssFile.css"; - More traditional style for CSS. Supports preprocessors and vanilla CSS. If you prefer the cascade, inheritance will naturally be in effect here.

c) Inline - Direct control over how an element will render. I most commonly use inline to control the size of a picture, since you might want each one to display at a different size and don't want a new line of CSS per element.
