/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/hsb", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
        if (v === 0 && i % 100 === 1 || f % 100 === 1)
            return 1;
        if (v === 0 && i % 100 === 2 || f % 100 === 2)
            return 2;
        if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 ||
            f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4)
            return 3;
        return 5;
    }
    exports.default = [
        'hsb', [['dop.', 'pop.'], ['dopołdnja', 'popołdnju'], u], [['dopołdnja', 'popołdnju'], u, u],
        [
            ['n', 'p', 'w', 's', 'š', 'p', 's'], ['nje', 'pón', 'wut', 'srj', 'štw', 'pja', 'sob'],
            ['njedźela', 'póndźela', 'wutora', 'srjeda', 'štwórtk', 'pjatk', 'sobota'],
            ['nj', 'pó', 'wu', 'sr', 'št', 'pj', 'so']
        ],
        u,
        [
            ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
            [
                'jan.', 'feb.', 'měr.', 'apr.', 'mej.', 'jun.', 'jul.', 'awg.', 'sep.', 'okt.', 'now.',
                'dec.'
            ],
            [
                'januara', 'februara', 'měrca', 'apryla', 'meje', 'junija', 'julija', 'awgusta', 'septembra',
                'oktobra', 'nowembra', 'decembra'
            ]
        ],
        [
            ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
            ['jan', 'feb', 'měr', 'apr', 'mej', 'jun', 'jul', 'awg', 'sep', 'okt', 'now', 'dec'],
            [
                'januar', 'februar', 'měrc', 'apryl', 'meja', 'junij', 'julij', 'awgust', 'september',
                'oktober', 'nowember', 'december'
            ]
        ],
        [['př.Chr.n.', 'po Chr.n.'], u, ['před Chrystowym narodźenjom', 'po Chrystowym narodźenju']],
        1, [6, 0], ['d.M.yy', 'd.M.y', 'd. MMMM y', 'EEEE, d. MMMM y'],
        ['H:mm \'hodź\'.', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss zzzz'], ['{1} {0}', u, u, u],
        [',', '.', ';', '%', '+', '-', 'E', '·', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], '€', 'euro',
        { 'AUD': [u, '$'], 'PLN': ['zł'], 'THB': ['฿'] }, plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHNiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2xvY2FsZXMvaHNiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgseUNBQXlDO0lBQ3pDLCtDQUErQztJQUUvQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsZ0JBQWdCLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFDN0UsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDMUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDakUsT0FBTyxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RjtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEYsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7WUFDMUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7U0FDM0M7UUFDRCxDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVEO2dCQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2dCQUN0RixNQUFNO2FBQ1A7WUFDRDtnQkFDRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVc7Z0JBQzVGLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVTthQUNsQztTQUNGO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVELENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDcEY7Z0JBQ0UsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXO2dCQUNyRixTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVU7YUFDbEM7U0FDRjtRQUNELENBQUMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUM1RixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztRQUM5RCxDQUFDLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUM5RCxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNO1FBQzFELEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsTUFBTTtLQUN2RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksIHYgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGgsXG4gICAgICBmID0gcGFyc2VJbnQobi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJyksIDEwKSB8fCAwO1xuICBpZiAodiA9PT0gMCAmJiBpICUgMTAwID09PSAxIHx8IGYgJSAxMDAgPT09IDEpIHJldHVybiAxO1xuICBpZiAodiA9PT0gMCAmJiBpICUgMTAwID09PSAyIHx8IGYgJSAxMDAgPT09IDIpIHJldHVybiAyO1xuICBpZiAodiA9PT0gMCAmJiBpICUgMTAwID09PSBNYXRoLmZsb29yKGkgJSAxMDApICYmIGkgJSAxMDAgPj0gMyAmJiBpICUgMTAwIDw9IDQgfHxcbiAgICAgIGYgJSAxMDAgPT09IE1hdGguZmxvb3IoZiAlIDEwMCkgJiYgZiAlIDEwMCA+PSAzICYmIGYgJSAxMDAgPD0gNClcbiAgICByZXR1cm4gMztcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2hzYicsIFtbJ2RvcC4nLCAncG9wLiddLCBbJ2RvcG/FgmRuamEnLCAncG9wb8WCZG5qdSddLCB1XSwgW1snZG9wb8WCZG5qYScsICdwb3BvxYJkbmp1J10sIHUsIHVdLFxuICBbXG4gICAgWyduJywgJ3AnLCAndycsICdzJywgJ8WhJywgJ3AnLCAncyddLCBbJ25qZScsICdww7NuJywgJ3d1dCcsICdzcmonLCAnxaF0dycsICdwamEnLCAnc29iJ10sXG4gICAgWyduamVkxbplbGEnLCAncMOzbmTFumVsYScsICd3dXRvcmEnLCAnc3JqZWRhJywgJ8WhdHfDs3J0aycsICdwamF0aycsICdzb2JvdGEnXSxcbiAgICBbJ25qJywgJ3DDsycsICd3dScsICdzcicsICfFoXQnLCAncGonLCAnc28nXVxuICBdLFxuICB1LFxuICBbXG4gICAgWydqJywgJ2YnLCAnbScsICdhJywgJ20nLCAnaicsICdqJywgJ2EnLCAncycsICdvJywgJ24nLCAnZCddLFxuICAgIFtcbiAgICAgICdqYW4uJywgJ2ZlYi4nLCAnbcSbci4nLCAnYXByLicsICdtZWouJywgJ2p1bi4nLCAnanVsLicsICdhd2cuJywgJ3NlcC4nLCAnb2t0LicsICdub3cuJyxcbiAgICAgICdkZWMuJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ2phbnVhcmEnLCAnZmVicnVhcmEnLCAnbcSbcmNhJywgJ2FwcnlsYScsICdtZWplJywgJ2p1bmlqYScsICdqdWxpamEnLCAnYXdndXN0YScsICdzZXB0ZW1icmEnLFxuICAgICAgJ29rdG9icmEnLCAnbm93ZW1icmEnLCAnZGVjZW1icmEnXG4gICAgXVxuICBdLFxuICBbXG4gICAgWydqJywgJ2YnLCAnbScsICdhJywgJ20nLCAnaicsICdqJywgJ2EnLCAncycsICdvJywgJ24nLCAnZCddLFxuICAgIFsnamFuJywgJ2ZlYicsICdtxJtyJywgJ2FwcicsICdtZWonLCAnanVuJywgJ2p1bCcsICdhd2cnLCAnc2VwJywgJ29rdCcsICdub3cnLCAnZGVjJ10sXG4gICAgW1xuICAgICAgJ2phbnVhcicsICdmZWJydWFyJywgJ23Em3JjJywgJ2FwcnlsJywgJ21lamEnLCAnanVuaWonLCAnanVsaWonLCAnYXdndXN0JywgJ3NlcHRlbWJlcicsXG4gICAgICAnb2t0b2JlcicsICdub3dlbWJlcicsICdkZWNlbWJlcidcbiAgICBdXG4gIF0sXG4gIFtbJ3DFmS5DaHIubi4nLCAncG8gQ2hyLm4uJ10sIHUsIFsncMWZZWQgQ2hyeXN0b3d5bSBuYXJvZMW6ZW5qb20nLCAncG8gQ2hyeXN0b3d5bSBuYXJvZMW6ZW5qdSddXSxcbiAgMSwgWzYsIDBdLCBbJ2QuTS55eScsICdkLk0ueScsICdkLiBNTU1NIHknLCAnRUVFRSwgZC4gTU1NTSB5J10sXG4gIFsnSDptbSBcXCdob2TFulxcJy4nLCAnSDptbTpzcycsICdIOm1tOnNzIHonLCAnSDptbTpzcyB6enp6J10sIFsnezF9IHswfScsIHUsIHUsIHVdLFxuICBbJywnLCAnLicsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnwrcnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMMKgJScsICcjLCMjMC4wMMKgwqQnLCAnI0UwJ10sICfigqwnLCAnZXVybycsXG4gIHsnQVVEJzogW3UsICckJ10sICdQTE4nOiBbJ3rFgiddLCAnVEhCJzogWyfguL8nXX0sIHBsdXJhbFxuXTtcbiJdfQ==