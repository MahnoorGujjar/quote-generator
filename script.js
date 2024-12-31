let quote = [{
     quote : `"The first draft is just you telling yourself the story."`,
     writer : `- Terry Pratchett`,

},{
    quote : `"Never write anything that does not give you great pleasure. Emotion is easily transferred from the writer to the reader."`,
    writer : `- Joseph Joubert`,
},{
    quote : `"Whatever the mind of man can conceive and believe, it can achieve"`,
    writer : `"- Napoleon Hill"`,
},{
    quote : `"Life isn't about getting and having, it's about giving and being."`,
    writer : `"- Kevin Kruse"`,
},{
    quote : `" We become what we think about."`,
    writer : `"- Earl Nightingale"`,
},{
    quote : `"Your time is limited, so don’t waste it living someone else’s life."`,
    writer : `"- Steve Jobs"`,
},{
    quote : `"Every child is an artist.  The problem is how to remain an artist once he grows up."`,
    writer : `"- Pablo Picasso"`,
},{
    quote : `"You can never cross the ocean until you have the courage to lose sight of the shore."`,
    writer : `"- Christopher Columbus"`,
},{
    quote : `"The two most important days in your life are the day you are born and the day you find out why."`,
    writer : `"- Mark Twain"`,
},{
    quote : `"There is only one way to avoid criticism: do nothing, say nothing, and be nothing."`,
    writer : `"- Aristotle"`,
},{
    quote : `"If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced. "`,
    writer : `"- Vincent Van Gogh"`,
}]

function generatequote() {
    // Get a random index
    let randomIndex = Math.floor(Math.random() * quote.length);
    
    // Update the quote and writer text
    document.getElementById("quote").textContent = quote[randomIndex].quote;
    document.getElementById("writer").textContent = quote[randomIndex].writer;
}