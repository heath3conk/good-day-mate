
class IncludablesController < ApplicationController
  include SessionHelper

  def index
    ac = current_user.available_currents
    render json: ac
  end

  def tracker
    p "RIGHT HERE HI HELLO"
    p params[:label]
    tracker = Tracker.find_by(creator_id: current_user.id, label: params[:label])
    current_user.tracker_values << TrackerValue.create(tracker_id: tracker.id)

    render json: "Sup"
  end

  def create
    user = current_user
    @stream = user.streams.create(label: "Test")
    p "#" * 50 
    p params[:stuff]
    i = 0
    params[:stuff].each_value do |object_hash|
      p "%" * 50 
      p object_hash
      type = object_hash[:includable_type]

      if object_hash[:custom] == "true"
        p "*" * 50
        p object_hash
        # klass = type.constantize
        label = object_hash[:label]
        data = object_hash[:data]

        case type
          when "Timer"
            duration = (data.to_i * 60)
            current = Timer.create!(label: label, duration: duration, creator_id: user.id)
            id = current.id
          when "Placeholder"
            icon = data
            current = Placeholder.create!(label: label, icon: icon, creator_id: user.id)
            id = current.id
          when "Tracker"
            unit = data
            current = Tracker.create!(label: label, unit: unit, creator_id: user.id)
            id = current.id
          else
        end

      elsif object_hash[:custom] == "false"
        id = object_hash[:includable_id]
        p "^" * 50
        p id
      end
      @stream.inclusions << Inclusion.create!(includable_id: id.to_i, includable_type: type, order: i)
      i += 1
    end
    render :nothing => true
  end


  private



end
