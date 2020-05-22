const backendUrl = 'https://staging-api.mysoftwarescout.de';

export function getURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
  return 'undefined';
}

export async function saveLead(lead) {
  const res = await fetch(`http://localhost:5000/leads`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lead: lead }),
    dataType: 'json',
    crossDomain: true
  });
  console.log(res);
  return res.ok;
}
