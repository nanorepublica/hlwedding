---
---

// var FullName = React.createClass({
//     handleFirstNameChange: function(e) {
//         this.props.onChange('firstName', e.target.value)
//     },
//     handleLastNameChange: function(e) {
//         this.props.onChange('lastName' e.target.value)
//     },
//     render: function() {
//         return (
//           <div className="form-group">
//               <label for="full-name" className="col-sm-3 control-label">Your Full Name</label>
//               <div className="col-sm-4">
//                 <input type="text" className="form-control" id="first-name" placeholder="First Name" required value={this.props.firstName} onChange={this.handleFirstNameChange}/>
//               </div>
//               <div className="col-sm-5">
//                 <input type="text" className="form-control" id="last-name" placeholder="Surname" required  value={this.props.lastName} onChange={this.handleLastNameChange}/>
//               </div>
//           </div>
//         );
//     }
// })
//
// var MenuChoice = React.createClass({
//     handleMenuChoice: function(e) {
//         this.props.onChange('menuChoice', e.target.value)
//     },
//     render: function() {
//         return (
//           <div className="form-group">
//               <label for="menu" className="col-sm-5 control-label">We have two wedding breakfast menus, one for meat eaters and the other for vegetarians, which menu would you like?</label>
//               <div className="col-sm-5 text-left" id="menu">
//                   <div className="radio">
//                       <label for="standard" >
//                           <input type="radio" name="menu" value="standard" onChange={this.handleMenuChoice}/>
//                           Standard Menu
//                       </label>
//                   </div>
//                   <div className="radio">
//                       <label for="vegetarian">
//                           <input type="radio" name="menu" value="vegetarian" onChange={this.handleMenuChoice}/>
//                           Vegetarian Menu
//                       </label>
//                   </div>
//               </div>
//           </div>
//         );
//     }
// })
//
// var DietRequirements = React.createClass({
//     handleDiet: function(e) {
//         this.setState({dietRequirements: e.target.value})
//     },
//     render: function() {
//         return (
//           <div className="form-group">
//               <label for="dietary-requirements" className="col-sm-5 control-label">Do you have any other dietary requirements (e.g. vegan), allegens or intolerances that we should be aware of?</label>
//               <div className="col-sm-7 form-extra-padding">
//                 <textarea type="text" rows="3" className="form-control" id="dietary-requirements" placeholder="Please enter details here" value={this.props.dietRequirements} onChange={this.handleDiet}></textarea>
//               </div>
//           </div>
//         );
//     }
// })

// var GuestRSVP = React.createClass({
//     handleGuest: function (e) {
//         this.props.handleGuest('menuChoice', e.target.value)
//     },
//     render: function() {
//         return (
//             <div className="guest">
//               <FullName firstName={this.props.guest.firstName} lastName={this.props.guest.lastName} onChange={this.props.handleGuest}/>
//               <MenuChoice menuChoice={this.props.guest.menuChoice} onChange={this.props.handleGuest}/>
//               <DietRequirements dietRequirements={this.props.guest.dietRequirements} onChange={this.props.handleGuest}/>
//             </div>
//         );
//     }
// })

var GuestRSVP = React.createClass({
    handleChange: function() {
        // child menu?
        if (this.refs.menuChoiceInput.checked) {
            var menu = "vegetarian"
        } else {
            var menu = "standard"
        }
        var _guest = {
            firstName: this.refs.firstNameInput.value,
            lastName: this.refs.lastNameInput.value,
            menuChoice: menu,
            dietRequirements: this.refs.dietRequirementsInput.value,
        }
        this.props.handleGuest(this.props.index, _guest)
    },
    render: function() {
        return (
            <div className="guest">
                <div className="form-group">
                    <label for="full-name" className="col-sm-3 control-label">Guest {this.props.index + 1}</label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" id="first-name" placeholder="First Name" required value={this.props.guest.firstName} onChange={this.handleChange} ref="firstNameInput"/>
                    </div>
                    <div className="col-sm-5">
                      <input type="text" className="form-control" id="last-name" placeholder="Surname" required  value={this.props.guest.lastName} onChange={this.handleChange} ref="lastNameInput"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="menu" className="col-sm-5 control-label">We have two wedding breakfast menus, one for meat eaters and the other for vegetarians, which menu would you like?</label>
                    <div className="col-xs-offset-4 col-sm-offset-0 col-sm-5 text-left" id="menuchoice">
                        <div className="radio">
                            <label for="standard" >
                                <input type="radio" name={this.props.index} onChange={this.handleChange} ref="menuChoiceInput" required />
                                Standard Menu
                            </label>
                        </div>
                        <div className="radio">
                            <label for="vegetarian">
                                <input type="radio" name={this.props.index} onChange={this.handleChange} ref="menuChoiceInput" required />
                                Vegetarian Menu
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="dietary-requirements" className="col-sm-5 control-label">Do you have any other dietary requirements (e.g. vegan), allegens or intolerances that we should be aware of?</label>
                    <div className="col-sm-7 form-extra-padding">
                      <textarea type="text" rows="3" className="form-control" id="dietary-requirements" placeholder="Please enter details here" value={this.props.guest.dietRequirements} onChange={this.handleChange} ref="dietRequirementsInput"></textarea>
                    </div>
                </div>
            </div>
        );
    }
})


var OtherGuests = React.createClass({
    handleGuestCount: function(e) {
        this.props.handleCount(e.target.value)
    },
    render: function() {
        return (
          <div className="form-group">
              <label for="rsvp-count" className="col-sm-5 control-label">Replying on behalf of:</label>
              <div className="col-sm-7">
                <select className="form-control" id="rsvp-count" value={this.props.guestCount} onChange={this.handleGuestCount}>
                    <option value="1">Yourself only</option>
                    <option value="2">Yourself + 1 invited guest</option>
                    <option value="3">Yourself + 2 invited guests</option>
                    <option value="4">Yourself + 3 invited guests</option>
                </select>
              </div>
          </div>
        );
    }
})


var SongRequest = React.createClass({
    handleSong: function(e) {
        this.props.handleSong(e.target.value);
    },
    render: function() {
        return (
          <div className="form-group">
              <label for="song" className="col-sm-5 control-label">Finally we will be having a live band in the evening, what song will guarantee youll get up on the dance floor?</label>
              <div className="col-sm-7 form-extra-padding">
                <input type="text" className="form-control" id="song" placeholder="Learn to Fly - Foo Fighters" value={this.props.song} onChange={this.handleSong}/>
              </div>
          </div>
        );
    }
})

var ConfirmationEmail = React.createClass({
    handleEmail: function(e) {
        this.props.handleEmail(e.target.value);
    },
    render: function() {
        return (
          <div className="form-group">
              <label for="email" className="col-sm-5 control-label">Add your email address to get a confirmation you submitted here:</label>
              <div className="col-sm-7 form-extra-padding">
                <input type="email" className="form-control" id="email" placeholder="guest@example.com" value={this.props.email} onChange={this.handleEmail}/>
              </div>
          </div>
        );
    }
})

var Taxi = React.createClass({
    handleChange: function(e) {
        if (this.refs.taxiInput.checked) {
            var taxi = 'No'
        } else {
            var taxi = 'Yes'
        }
        this.props.handleTaxi(taxi)
    },
    render: function() {
        return (
            <div className="form-group">
                <label for="menu" className="col-sm-5 control-label">We will book a fleet of taxis from the ceremony to Downing College for those who would like one. Would you like to be included?</label>
                <div className="col-xs-offset-4 col-sm-offset-0 col-sm-5 text-left" id="taxichoice">
                    <div className="radio">
                        <label for="yes" >
                            <input type="radio" name="taxi" onChange={this.handleChange} ref="taxiInput" />
                            Yes please!
                        </label>
                    </div>
                    <div className="radio">
                        <label for="no">
                            <input type="radio" name="taxi" onChange={this.handleChange} ref="taxiInput" />
                            No, thank you!
                        </label>
                    </div>
                </div>
            </div>
        );
    }
})


var _guest = {
    dietRequirements: '',
    firstName: '',
    lastName: '',
    menuChoice: null
}

var RSVPForm = React.createClass({
    getInitialState: function() {
        return {
            guests: [_guest],
            song: '',
            guestCount: 1,
            email: '',
            taxi: 'No'
        };
    },
    handleSubmit: function(e) {
        e.preventDefault()
        var webhook = "https://zapier.com/hooks/catch/663599/u5wbhc/"
        var email_webhook = "https://zapier.com/hooks/catch/663599/uivnyi/"
        var submit_data = this.state.guests
        submit_data[0].song = this.state.song
        submit_data[0].email = this.state.email
        submit_data[0].taxi = this.state.taxi
        submit_data.reverse().map(function(data) {
            $.post(webhook, data)
        })
        var self = this;
        $.post(email_webhook, this.state, function(resp) {
            console.log('Email sent');
            self.setState({
                guests: [_guest],
                song: '',
                guestCount: 1,
                email: '',
                taxi: null
            })
            $("#rsvpsuccess").show()
            $("#rsvpsubmitform").hide()
            setTimeout(function() {
                $("#rsvpsuccess").hide()
                $("#rsvpsubmitform").show()
            }, 5000)
        })

    },
    handleGuest: function(index, guest) {
        var guests = []
        for (var i = 0; i < this.state.guestCount; i++) {
            if (i === index) {
                guests[i] = guest
            } else {
                guests[i] = this.state.guests[i]
            }
        }
        this.setState({guests: guests});
    },
    handleSong: function(value) {
        this.setState({song:value})
    },
    handleEmail: function(value) {
        this.setState({email:value})
    },
    handleTaxi: function(value) {
        this.setState({taxi:value})
    },
    handleGuestCount: function(value) {
        var guestCount = Number(value)
        var guests = []
        guests[0] = this.state.guests[0]
        for (var i = 0; i < guestCount; i++) {
            var guest = this.state.guests[i]
            if (guest === undefined) {
                guest = _guest
            }
            guests[i] = guest;
        }
        this.setState({guestCount: guestCount, guests: guests})
    },
    render: function() {
        var other_guests = this.state.guests.slice(1).map(function(g, i) {
            var props = {
                guest: g,
                key: i + 1,
                index: i + 1,
                handleGuest:this.handleGuest
            }
            return <GuestRSVP {...props} />

        }, this)
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <GuestRSVP guest={this.state.guests[0]} key={0} index={0} handleGuest={this.handleGuest}/>
              <OtherGuests guestCount={this.state.guestCount} handleCount={this.handleGuestCount}/>
              <div id="other-guests">
                {other_guests}
              </div>
              <SongRequest song={this.state.song} handleSong={this.handleSong} />
              <Taxi song={this.state.taxi} handleTaxi={this.handleTaxi} />
              <ConfirmationEmail email={this.state.email} handleEmail={this.handleEmail} />
              <div className="form-group">
                  <div id="rsvpsubmitform" className="col-sm-offset-4 col-sm-4">
                    <input type="submit" className="form-control" id="rsvp-submit" value="Submit"/>
                  </div>
                  <div className="clearfix"></div>
                  <div id="rsvpsuccess" className="col-sm-offset-3 col-sm-6">
                    <div className="alert alert-success" role="alert">
                    Your RSVP was submitted successfully!
                    </div>
                  </div>
              </div>
           </form>
        );
    }
})




function initrsvp() {
    $('#password').keypress(function (e) {
      if (e.which == 13) {
        load_rsvp_subpage('form')
        return false;    //<---- Add this line
      }
    });
    $("#submit").click(function() {
        load_rsvp_subpage('form')
    });
    $(window).on('hashchange', function() {
        load_rsvp_subpage(window.location.hash.slice(1))
    })
}


function load_rsvp_subpage(subpage) {
    $.ajax('/secure/' + subpage + '/', {
        username: 'rsvp',
        password: $('#password').val(),
        success: function(data) {
            $("#viparea").html(data);
            $("#passform").hide();
            $(".rsvpindex").hide();
            $("#viparea").show();
            $('.subnavbar #sub' + subpage).addClass('submenuactive')
            var form = document.getElementById('rsvp-form');
            if (form !== null) {
                ReactDOM.render(
                  <RSVPForm />,
                  form
                );
            }
            $('.subnavbar li a').each(function(i, element) {
                var e = element;
                $(element).on('click', function() {
                    load_rsvp_subpage($(element).prop('href').split("#")[1])
                })
            })
        },
        error: function() {
            $("#error").text('Incorrect password!')
        }
    });
}

$(document).ready(function(){
    if (window.location.pathname === '/rsvp/') {
        initrsvp();
    }
})
