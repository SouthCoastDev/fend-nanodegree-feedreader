/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('all feeds have URL', function() {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        it('all feeds have name', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });

    describe('The menu', function() {

        it('menu hidden by default',function(){
            var body = document.getElementsByTagName('body')[0];
            expect(body.classList).toContain('menu-hidden');
        });

        it('menu changed when clicked',function(){
        var body = document.getElementsByTagName('body')[0];
        menuIcon = $('.menu-icon-link');
        //test clicking opens menu
        menuIcon.click();
        expect(body.classList).not.toContain('menu-hidden');
        //test clicking again closes menu
        menuIcon.click();
        expect(body.classList).toContain('menu-hidden');
        });
    });

    describe('Initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        it('loadFeed function calls and completes', function(){
            expect(allFeeds.length).not.toBe(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        it('new feed loaded and content changes',function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        });
    });

}());
