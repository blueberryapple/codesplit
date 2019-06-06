setTimeout(
    () =>
        import(/* webpackChunkName: "folktale" */ 'folktale/maybe').then(
            Maybe => console.log(Maybe.Just(20).getOrElse())
        ),
    5000
);
